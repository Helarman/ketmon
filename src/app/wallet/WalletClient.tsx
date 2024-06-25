'use client'
import { Box, Typography } from "@mui/material"
import WalletCard from "../components/Cards/WalletCard";
import WalletReplen from "../components/Inputs/WalletReplen";
import toast from "react-hot-toast";
import { WalletButtonProps, UserProps } from "../types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const WalletClient = ({ currentUser, banks, contacts }: { currentUser: UserProps, banks: WalletButtonProps[], contacts: WalletButtonProps[] }) => {
    const router = useRouter()

    if (!currentUser) {
        router.push('/')
        return null;
    }

    return (
        <Box sx={{ mb: '70px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                Кошелек
            </Typography>
            <WalletCard balance={currentUser.balance} />

            <WalletReplen banks={banks} contacts={contacts}/>
        </Box >

    )
};

export default WalletClient;