import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Welcome to Code.Hub Dashboard!
        </Typography>
        <Typography variant="body2" component="p">
          Manage everything and have fun!
        </Typography>
      </CardContent>
    </Card>
  );
}
