'use client'

import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HeaderItem from './Sections/HeaderItem';
import Steps from './Steps';
import JobSearchSection from './Sections/JobSearchSection';
import { RecentJob } from './Sections/RecentJob';
import { styled } from '@mui/styles';
import { RecentRealEstate } from './Sections/RecentRealEstates';
import RealEstateSearchSection from './Sections/RealEstateSearchSection';




interface TabConentProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    centered?: boolean;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}


interface StyledTabProps {
    disabled?: boolean;
    label: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    mt: '5rem',
    '& .MuiTabs-indicator': {
        backgroundColor: '#C40C0C',
        color: '#C40C0C'
    },
    '& .Mui-selected': {
        color: 'black'
    },
});

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(() => ({
    textTransform: 'uppercase',
    color: 'grey',
    fontSize: '1rem',
    '&.Mui-selected': {
        color: '#C40C0C',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));


const TabConent = (props: TabConentProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const HomeClient = ({ data, cities, categories }: { data: any, cities: string[], categories: string[] }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <header>
            <StyledTabs
                value={value}
                onChange={handleChange}
                centered

            >
                <StyledTab label="ВАКАНСИЯ" />
                <StyledTab label="КВАРТИРА" />
                <StyledTab label="ҲУЖЖАТЛАР" />
            </StyledTabs>

            <TabConent value={value} index={0}>
                <HeaderItem
                    title={data.Header[0].Title}
                    subTitle={data.Header[0].subTitle}
                    buttons={[
                        { label: 'ИШ ТОПИШ', href: '/jobs' },
                        { label: 'РЕКЛАМА БЕРИШ', href: 'https://wa.me/79107093030' }]
                    }
                    image={data.Header[0].image.data.attributes.url}
                />
                <Steps steps={data.steps[0]} title={'Сиз учун саҳифамиз қулайликлари?'} />
                <JobSearchSection image={data.jobSearchImage} categories={categories} cities={cities} />
                <RecentJob jobs={data.RecentJobs} />
            </TabConent>

            <TabConent value={value} index={1}>
                <HeaderItem
                    title={data.Header[1].Title}
                    subTitle={data.Header[1].subTitle}
                    buttons={[
                        { label: 'УЙ-ЖОЙ ТОПИШ', href: '/real-estates' },
                        { label: 'РЕКЛАМА БЕРИШ', href: 'https://wa.me/79107093030' }]
                    }
                    image={data.Header[1].image.data.attributes.url}
                />
                <Steps isItem steps={data.steps[1]} title={'Сиз учун саҳифамиз қулайликлари?'} />
                <RealEstateSearchSection image={data.realEstateSearch} cities={cities} />
                <RecentRealEstate realEstates={data.RecetRealEstates}/>
            </TabConent>

            <TabConent value={value} index={2}>
                <HeaderItem
                   title={data.Header[2].Title}
                   subTitle={data.Header[2].subTitle}
                    buttons={[
                        { label: 'ҲУЖЖАТЛАР', href: '/items' },
                        { label: 'ТОПИБ ОЛДИМ', href: 'https://wa.me/79107093030' }]
                    }
                    image={data.Header[2].image.data.attributes.url}
                />
                <Steps isItem steps={data.steps[2]} title={'Йўқолган ҳужжатни қандай топсам бўлади?'} />
            </TabConent>


        </header>
    )
};


export default HomeClient;