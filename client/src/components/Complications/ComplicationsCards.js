import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { complications } from "../../research"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../FontAwesomeIcons"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

function HeartCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="complications" className={classes.avatar}>
            <FontAwesomeIcon icon="user-md" />
          </Avatar>
        }
        // top of the card
        title={complications.listOfComps[0].name}
        subheader={complications.title}
      />
      <CardMedia
        className={classes.media}
        // grab image from research file
        image={complications.listOfComps[0].image}
        title={complications.listOfComps[0].imageText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">Read more</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">{complications.listOfComps[0].name}</Typography>
          <Typography paragraph>
            {/* What to know */}
            {complications.listOfComps[0].description}
            </Typography>
          <Typography paragraph>
            {/* What to do */}
            {complications.listOfComps[0].recommendation}
          </Typography>
          {/* Video Button */}
          <Button variant="contained" color="primary" href={complications.listOfComps[0].video} target="_blank" rel="noopener" >
            Quick Video
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function KidneyCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="complications" className={classes.avatar}>
            <FontAwesomeIcon icon="user-md" />
          </Avatar>
        }
        // top of the card
        title={complications.listOfComps[1].name}
        subheader={complications.title}
      />
      <CardMedia
        className={classes.media}
        // grab image from research file
        image={complications.listOfComps[1].image}
        title={complications.listOfComps[1].imageText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">Read more</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">{complications.listOfComps[1].name}</Typography>
          <Typography paragraph>
            {/* What to know */}
            {complications.listOfComps[1].description}
            </Typography>
          <Typography paragraph>
            {/* What to do */}
            {complications.listOfComps[1].recommendation}
          </Typography>
          {/* Video Button */}
          <Button variant="contained" color="primary" href={complications.listOfComps[1].video} target="_blank" rel="noopener" >
            Quick Video
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function EyeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="complications" className={classes.avatar}>
            <FontAwesomeIcon icon="user-md" />
          </Avatar>
        }
        // top of the card
        title={complications.listOfComps[2].name}
        subheader={complications.title}
      />
      <CardMedia
        className={classes.media}
        // grab image from research file
        image={complications.listOfComps[2].image}
        title={complications.listOfComps[2].imageText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">Read more</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">{complications.listOfComps[2].name}</Typography>
          <Typography paragraph>
            {/* What to know */}
            {complications.listOfComps[2].description}
            </Typography>
          <Typography paragraph>
            {/* What to do */}
            {complications.listOfComps[2].recommendation}
          </Typography>
          {/* Video Button */}
          <Button variant="contained" color="primary" href={complications.listOfComps[2].video} target="_blank" rel="noopener" >
            Quick Video
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function NeuroCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="complications" className={classes.avatar}>
            <FontAwesomeIcon icon="user-md" />
          </Avatar>
        }
        // top of the card
        title={complications.listOfComps[3].name}
        subheader={complications.title}
      />
      <CardMedia
        className={classes.media}
        // grab image from research file
        image={complications.listOfComps[3].image}
        title={complications.listOfComps[3].imageText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">Read more</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">{complications.listOfComps[3].name}</Typography>
          <Typography paragraph>
            {/* What to know */}
            {complications.listOfComps[3].description}
            </Typography>
          <Typography paragraph>
            {/* What to do */}
            {complications.listOfComps[3].recommendation}
          </Typography>
          {/* Video Button */}
          <Button variant="contained" color="primary" href={complications.listOfComps[3].video} target="_blank" rel="noopener" >
            Quick Video
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function GumCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="complications" className={classes.avatar}>
            <FontAwesomeIcon icon="user-md" />
          </Avatar>
        }
        // top of the card
        title={complications.listOfComps[4].name}
        subheader={complications.title}
      />
      <CardMedia
        className={classes.media}
        // grab image from research file
        image={complications.listOfComps[4].image}
        title={complications.listOfComps[4].imageText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textPrimary" component="p">Read more</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">{complications.listOfComps[4].name}</Typography>
          <Typography paragraph>
            {/* What to know */}
            {complications.listOfComps[4].description}
            </Typography>
          <Typography paragraph>
            {/* What to do */}
            {complications.listOfComps[4].recommendation}
          </Typography>
          {/* Video Button */}
          <Button variant="contained" color="primary" href={complications.listOfComps[4].video} target="_blank" rel="noopener" >
            Quick Video
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export { HeartCard, KidneyCard, EyeCard, NeuroCard, GumCard }