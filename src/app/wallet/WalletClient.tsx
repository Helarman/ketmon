'use client'
import { Box, Typography } from "@mui/material"
import WalletCard from "../components/Cards/WalletCard";
import WalletReplen from "../components/Inputs/WalletReplen";
import toast from "react-hot-toast";
import { UserProps } from "../types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const WalletClient = ({ currentUser }: { currentUser: UserProps }) => {
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

            <WalletReplen />
        </Box >

    )
};

export default WalletClient;