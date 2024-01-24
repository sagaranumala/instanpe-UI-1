import React, { useState, useEffect } from "react";
import Image from "next/image";

//import React in our project

const ImageSlider = () => {
  const data = [
    {
      title: "Burger 1",
      caption: "Original  Cheezy Meat",
      url: "/pay2.jpg",
    },
    {
      title: "Burger 2",
      caption: "100% Original Beef",
      url: "/pay3.png",
    },
    {
      title: "Burger 3",
      caption: "Mouthfull Of Happiness",
      height: 50,
      url: "/pay4.jpg",
    },
  ];

  const [image1, setData1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (image1 == 2) {
        setData1(0);
      } else {
        let x = image1;
        x++;
        setData1(x);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [image1]);

  var x1 = "img" + image1;

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <div
          style={{
            height: 20,
            width: 100,
            display:"flex",
            gap: 20,
            position: "absolute",
            zIndex: 1,
            marginTop: 450,
            marginLeft: 650,
          }}
        >
          
          {data.map((x, i) => {
            return (
              <div
                style={
                  i == image1
                    ? {
                        height: 10,
                        width: 20,
                        backgroundColor: "#fff",
                        borderRadius: 5,
                      }
                    : {
                        height: 10,
                        width: 10,
                        backgroundColor: "gray",
                        borderRadius:5,
                      }
                }
              ></div>
            );
          })}
        </div>
        <Image
          accessibilityLabel="React logo"
          src={data[image1].url}
          width={1520}
          height={500}
        />
      </div>
    </div>
  );
};

const styles = {
  x1: {
    width: 20,
    height: 20,
    color: "#000",
  },
  app: {
    
    maxWidth: 500,
  },
  logo: {
    height: 150,
    width: 300,
  },
  header: {
    marginLeft:10,
    marginRight:10,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 15,
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
};

const buttonStyles = {
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
};

export default ImageSlider;
