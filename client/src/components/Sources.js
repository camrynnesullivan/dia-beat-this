import React from 'react'
import { sources } from "../research"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 450,
      backgroundColor: 'rgba(0, 0, 0, .09)',
      marginBottom: "70px"
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

export default function Sources() {
    const classes = useStyles();

    return (
    <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>View Sources</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <List className="sources-list">
                    {sources.map((sources, index) => {
                        return (
                            <ListItem key={index}>
                                <Link href={sources.access} target="_blank" rel="noopener noreferrer">
                                    {sources.source}
                                </Link> 
                            </ListItem>
                        )
                    })}
                </List>
        </AccordionDetails>
      </Accordion>
    )
}
