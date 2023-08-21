import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import ChequeTabPanel from './ChequeTabPanel';
import MobileBankingTabPanel from './MobileBankingTabPanel';
import COLORS from '../../utility/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OptionTab = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <Box>
        <Box sx={{ width: '100%', bgcolor: COLORS.primaryLight }}>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                centered
                TabIndicatorProps={{ 
                    style: {
                        background: COLORS.primaryDark 
                    },
                }}
                >
                <Tab label="Cheque" />
                <Tab label="Mobile Banking" />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <ChequeTabPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <MobileBankingTabPanel />
        </TabPanel>
    </Box>
  )
}

export default OptionTab