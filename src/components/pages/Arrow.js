import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Mobile from './Mobile'
import Tablet from './Tablet'
import Laptop from './Laptop';
import Desktop from './Desktop';
import Ram from './Ram';
import Speaker from './Speaker';
import Headphone from './Headphone';
function TabPanel(props) {
    const { children, value, index, textstyle, ListItem,  ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 100,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root} style={{height: '100%'}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Mobile" {...a11yProps(0)} />
                <Tab label="TAB" {...a11yProps(1)} />
                <Tab label="Laptop" {...a11yProps(2)} />
                <Tab label="Desktop" {...a11yProps(3)} />
                <Tab label="RAM" {...a11yProps(4)} />
                <Tab label="Speaker" {...a11yProps(5)} />
                <Tab label="Headphone" {...a11yProps(6)} />
            </Tabs>
            <TabPanel className='mobile-tab-wrapper' value={value} index={0}>
              <Mobile/>           
            </TabPanel>
            <TabPanel className='Tablet-tab-wrapper' value={value} index={1}>
            <Tablet/>
            </TabPanel>
            <TabPanel className='Laptop-tab-wrapper' value={value} index={2}>
                <Laptop/>
            </TabPanel>
            <TabPanel className='Desktop-tab-wrapper' value={value} index={3}>
                <Desktop/>
            </TabPanel>
            <TabPanel className='Ram-tab-wrapper' value={value} index={4}>
                <Ram/>
            </TabPanel>
            <TabPanel className='Speaker-tab-wrapper' value={value} index={5}>
                <Speaker/>
            </TabPanel>
            <TabPanel className='Headphone-tab-wrapper' value={value} index={6}>
                <Headphone/>
            </TabPanel>
        </div>
    );
}