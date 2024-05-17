import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Post } from "@/lib/types";
import { getMdDescription } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";

export default function ActionAreaCard(props: Post) {
  const randomImage = "https://source.unsplash.com/random";
  const randomImage2 = "https://picsum.photos/200";
  return (
    <div className="m-5 w-60 h-60 block">
      <a href={`/posts/${props.id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {/* <CardMedia
                component="img"
                height="200"
                image={props.url || randomImage}
                alt="green iguana"
              /> */}
            <Image
              src={props.url || randomImage}
              alt="Picture of the author"
              width={400}
              height={400}
              className="object-cover h-48 w-96"
            />
            <div className="block">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {getMdDescription(props.content)}
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}
