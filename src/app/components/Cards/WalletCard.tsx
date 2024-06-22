import { Box, Button, Card, CardContent, Fab, IconButton, Typography } from '@mui/material';

interface WalletProps {
    balance: number;    
}

const WalletCard: React.FC<WalletProps> = ({ balance }) => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box>
                    <Typography gutterBottom variant="h6" component="div" style={{ textDecoration: 'uppercase' }}>
                        БАЛАНС
                    </Typography>
                    <Typography variant="h3" color="text.secondary" sx={{ mb: 2 }}>
                        {balance.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                    </Typography>
                </Box>
            </CardContent>
        </Card >
    );
};

export default WalletCard;
