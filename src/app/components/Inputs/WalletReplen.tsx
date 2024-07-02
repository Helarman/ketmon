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
import { WalletButtonProps } from '@/app/types';

const steps = ['Пул ўтказинг', 'Чекни Вотсапдан жунатинг', 'Хисобингиз тўлди'];

const CustomButton = styled(Button)(({ bgcolor, textcolor, element, href, target }: { bgcolor: string, textcolor: string, element: string, href: string, target: string }) => ({
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
        link,
        bgcolor,
        textcolor
    }
        :
        {
            bankName: string;
            link: string;
            bgcolor: string;
            textcolor: string;
        }
) => {
    return (
        <CustomButton element='a' href={link} target="_blank" bgcolor={bgcolor} textcolor={textcolor}>
            {bankName}
        </CustomButton>
    );
};

const FirstStep = ({ banks }: { banks: WalletButtonProps[] }) => {
    return (
        <Box sx={{ py: '20px' }}>

            {banks && banks.map((bank) =>
            (
                <div key={bank.id}>
                    <ColoredButton
                        bankName={bank.attributes.name}
                        bgcolor={bank.attributes.background}
                        textcolor={bank.attributes.color}
                        link={bank.attributes.link}
                    />
                </div>
            ))}
        </Box>
    )
};


const SecondStep = ({ contacts }: { contacts: WalletButtonProps[] }) => {
    return (
        <Box sx={{ py: '20px' }}>
            {contacts && contacts.map((contact) =>
            (
                <div key={contact.id}>
                    <ColoredButton
                        bankName={contact.attributes.name}
                        bgcolor={contact.attributes.background}
                        textcolor={contact.attributes.color}
                        link={contact.attributes.link}
                    />
                </div>
            ))}
        </Box>
    )
};

const ThirdStep = () => {
    return (
        <Box sx={{ py: '20px', textAlign: 'center' }}>
            <Typography variant='h4'>
                Рахмат! Бир оздан сунг, хисобингиз тўлади!
            </Typography>
        </Box>
    )
};


const WalletReplen = ({ banks, contacts }: { banks: WalletButtonProps[], contacts: WalletButtonProps[] }) => {
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
        0: <FirstStep banks={banks} />,
        1: <SecondStep contacts={contacts} />,
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
                        ОРҚАГА
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button variant='contained' color='error' onClick={handleNext}>
                        {activeStep === 2 ? 'ТАСДИҚЛАНГ' : 'ОЛДИНГА'}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default WalletReplen;