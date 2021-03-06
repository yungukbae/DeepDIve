import { Box, makeStyles, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React, { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    border: "1px solid #b6b6b6",
    padding: "30px",
  },
  title: {
    "& .infoText": {
      display: "flex",
      justifyContent: "center",
      whiteSpace: "nowrap",
    },
  },
  dropZone: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    height: 400,
    margin: 40,
    border: "1px dashed #4B88FF",
    backgroundColor: "#E9F1FF",
    "& .addIcon": {
      width: 100,
      height: 100,
    },
  },
});

const Drop: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    const dropArea = document.getElementById("dropZone");
    console.log(dropArea);
    dropArea?.addEventListener("dragenter", dragenter, false);
    dropArea?.addEventListener("dragover", dragover, false);
    dropArea?.addEventListener("drop", drop, false);
    return () => {
      dropArea?.removeEventListener("dragenter", dragenter, false);
      dropArea?.removeEventListener("dragover", dragover, false);
      dropArea?.removeEventListener("drop", drop, false);
    };
  }, []);

  const dragenter = (e: any) => {
    console.log("drag enter");
    e.stopPropagation();
    e.preventDefault();
  };

  const dragover = (e: any) => {
    console.log("drag over");
    e.stopPropagation();
    e.preventDefault();
  };

  const drop = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
  };

  function handleFiles(files: any) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.startsWith("image/")) {
        continue;
      }

      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      document.getElementById("preview")?.appendChild(img); // "preview"??? ????????? ????????? div ???????????? ??????.

      const reader = new FileReader();
      reader.onload = (function (aImg: HTMLImageElement) {
        return function (e) {
          aImg.src = e.target?.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
    }
  };

  return (
    <div className={classes.root}>
      <Box className={classes.title}>
        <h1>?????? ????????? ??? ????????? ????????? ??????????????????</h1> <br />
        <Typography className="infoText" color="primary">
          <InfoIcon color="disabled" />
          ????????? ??????????
        </Typography>
      </Box>
      <Box id="dropZone" className={classes.dropZone}>
        <Box>?????? ????????? ????????? ????????? ????????????</Box>
        <AddCircleOutlineIcon className="addIcon" color="primary" />
      </Box>

      <div id="preview"></div>
      {/* <input id="fileuploader" onChange={handleUpload} type="file" /> */}
    </div>
  );
};

export default Drop;
