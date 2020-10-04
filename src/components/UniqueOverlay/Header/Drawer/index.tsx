import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemText } from '@material-ui/core';

import { Burger, Close } from './styles';

const useStyles = makeStyles({
  list: {
    width: '300px',
    padding: '10px 20px',
    fontFamily: 'var(--font-family) !important',
    '& .MuiTypography-body1': {
      fontFamily: 'var(--font-family) !important',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: 700,
      padding: '5px',
    },
    '& a': {
      color: 'var(--subtitle-color)',
      textDecoration: 'none',
    },
  },
  fullList: {
    width: 'auto',
  },
  closeButton: {
    borderRadius: 0,
    margin: '10px 25px',
    padding: '6px 8px',
    width: '48px',
    height: '30px',
    alignSelf: 'flex-end',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const TemporaryDrawer: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const items = [
    { text: 'USED INVENTORY', link: 'https://www.tesla.com/inventory/used/ms' },
    { text: 'TRADE-IN', link: 'https://www.tesla.com/tradein' },
    { text: 'CYBERTRUCK', link: 'https://www.tesla.com/cybertruck' },
    { text: 'ROADSTER', link: 'https://www.tesla.com/roadster' },
    { text: 'SEMI', link: 'https://www.tesla.com/semi' },
    { text: 'POWERWALL', link: 'https://www.tesla.com/powerwall' },
    { text: 'COMMERCIAL SOLAR', link: 'https://www.tesla.com/commercial' },
    { text: 'TEST DRIVE', link: 'https://www.tesla.com/drive' },
    { text: 'CHARGING', link: 'https://www.tesla.com/charging' },
    { text: 'FIND US', link: 'https://www.tesla.com/findus' },
    { text: 'SUPPORT', link: 'https://www.tesla.com/support' },
    { text: 'UNITED STATES', link: 'https://www.tesla.com/findus/list' },
  ];

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <>
      <Button onClick={toggleDrawer(anchor, false)} className={clsx(classes.closeButton)}>
        <Close />
      </Button>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {items.map(item => (
            <div key={item.text}>
              <ListItem button key={item.text}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <ListItemText primary={item.text} />
                </a>
              </ListItem>

              <Divider />
            </div>
          ))}
        </List>
      </div>
    </>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Burger />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
