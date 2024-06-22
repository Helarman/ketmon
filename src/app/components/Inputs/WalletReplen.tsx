'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';

const steps = ['Переведите деньги', 'Напишите о переводе', 'Пополнение выполнено'];

const CustomButton = styled(Button)(({ bgcolor, textcolor }: { bgcolor: string, textcolor: string }) => ({
    display: 'flex',
    fontSize: '1.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 12px',
    width: '100%',
    marginBottom: '20px',
    textTransform: 'none',
    backgroundColor: bgcolor,
    color: textcolor,
    '&:hover': {
        backgroundColor: bgcolor,
        opacity: 0.9
    },
}));

const ColoredButton = (
    {
        bankName,
        onClick,
        bgcolor,
        textcolor
    }
    :
    {
        bankName: string;
        onClick: () => void;
        bgcolor: string;
        textcolor: string;
    }
) => {
    return (
        <CustomButton onClick={onClick} bgcolor={bgcolor} textcolor={textcolor}>
            {bankName}
        </CustomButton>
    );
};

const FirstStep = () => {
    return (
        <Box sx={{ py: '20px' }}>
            <ColoredButton
                bankName="Сбербанк"
                bgcolor="#3a9f5f"
                textcolor="#ffffff"
                onClick={() => console.log('Оплата через Сбербанк')}
            />
            <ColoredButton
                bankName="ВТБ"
                bgcolor="#004488"
                textcolor="#ffffff"
                onClick={() => console.log('Оплата через ВТБ')}
            />
            <ColoredButton
                bankName="Т-Банк"
                bgcolor="#ffdd2d"
                textcolor="#000000"
                onClick={() => console.log('Оплата через Альфа-Банк')}
            />
        </Box>
    )
};

const SecondStep = () => {
    return (
        <Box sx={{ py: '20px' }}>
            <ColoredButton
                bankName="WhatsApp"
                bgcolor="#25D366"
                textcolor="#ffffff"
                onClick={() => console.log('Оплата через Сбербанк')}
            />
            <ColoredButton
                bankName="Telegram"
                bgcolor="#24A1DE"
                textcolor="#ffffff"
                onClick={() => console.log('Оплата через Сбербанк')}
            />
        </Box>
    )
};
const ThirdStep = () => {
    return (
        <Box sx={{ py: '20px', textAlign: 'center' }}>
            <Typography variant='h4'>
                Готово! Ожидайте зачисление!
            </Typography>
        </Box>
    )
};


const WalletReplen = () => {
    const router = useRouter()
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {

        activeStep === 2 ?
            router.push('/')
            :
            setActiveStep((prevActiveStep) => prevActiveStep + 1);


    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const stepContents: { [key: number]: JSX.Element } = {
        0: <FirstStep />,
        1: <SecondStep />,
        2: <ThirdStep />,
    };

    const stepContent = stepContents[activeStep];

    return (
        <Card sx={{ mt: '50px', pt: '20px', px: '20px' }}>
            <CardContent>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {stepContent}
                <CardActions sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        variant='contained'
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Назад
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button variant='contained' color='error' onClick={handleNext}>
                        {activeStep === 2 ? 'Закончить' : 'Далее'}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default WalletReplen;