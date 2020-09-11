import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { complications } from "../../research";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../FontAwesomeIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function ComplicationsCard(props) {
  const handleExpandClick = () => {
    console.log("ok");
    setExpanded(!expanded);
  };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
    return (
      <Card className={classes.root} elevation={0}>
        <CardHeader
          avatar={
            <Avatar aria-label="complications" className={classes.avatar}>
              <FontAwesomeIcon icon="user-md" />
            </Avatar>
          }
          // top of the card
          title={props.name}
          subheader={complications.title}
        />
        <CardMedia
          className={classes.media}
          // grab image from research file
          image={props.image}
          title={props.imageText}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h3">
            {complications.subtitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="body2" color="textPrimary" component="p">
            Read more
          </Typography>
          <div onClick={handleExpandClick}>
            {" "}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>{" "}
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {props.name}
            </Typography>
            <Typography paragraph>
              {/* What to know */}
              {props.description}
            </Typography>
            <Typography paragraph>
              {/* What to do */}
              {props.recommendation}
            </Typography>
            {/* Video Button */}
            <Button
              variant="contained"
              color="primary"
              href={props.video}
              target="_blank"
              rel="noopener"
            >
              Quick Video
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    );
}


export { ComplicationsCard };
