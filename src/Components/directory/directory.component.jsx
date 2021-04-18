/** @format */

import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  initialState = {
    sections: [
      {
        title: "Dairy Ice Cream",
        imageUrl:
          "https://mlpupix9f17o.i.optimole.com/wsEp57E-_Odz7vkC/w:1000/h:625/q:90/https://www.homestratosphere.com/wp-content/uploads/2020/05/Dairy-Ice-Cream-2-25-3-min.jpg",
        id: 1,
        linkUrl: "shop/dairyicecream",
      },
      {
        title: "Vegan Frozen Treats",
        imageUrl:
          "https://mlpupix9f17o.i.optimole.com/wsEp57E-iIb6hMxU/w:1000/h:667/q:90/https://www.homestratosphere.com/wp-content/uploads/2020/05/Vegan-Frozen-Treats-3-25-3-min.jpg",
        id: 2,
        linkUrl: "shop/veganfrozentreats",
      },
      {
        title: "Sugar Free Ice Cream",
        imageUrl:
          "https://mlpupix9f17o.i.optimole.com/wsEp57E-eBtCPMpE/w:1000/h:750/q:90/https://www.homestratosphere.com/wp-content/uploads/2020/05/Sugar-Free-Ice-Cream-4-25-3-min.jpg",
        id: 3,
        linkUrl: "shop/sugarfreeicecream",
      },
      {
        title: "Gelato",
        imageUrl:
          "https://static2.therecipeimages.com/wordpress/wp-content/uploads/2019/01/gelato2.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
        size: "large",
        id: 4,
        linkUrl: "shop/gelato",
      },
      {
        title: "Ice Cream Sandwiches",
        imageUrl:
          "https://mlpupix9f17o.i.optimole.com/wsEp57E-WgJKOjbe/w:1000/h:667/q:90/https://www.homestratosphere.com/wp-content/uploads/2020/05/Ice-Cream-Sandwiches-8-25-3-min.jpg",
        size: "large",
        id: 5,
        linkUrl: "shop/icecreamsandwiches",
      },
    ],
  };

  state = this.initialState;

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
