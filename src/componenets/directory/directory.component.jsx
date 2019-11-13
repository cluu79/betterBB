import React from 'react';
import MenuItem from './../../pages/menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Laptops",
          imageUrl: require("../../img/homepage-images/HomepageLaptop.jpg"),
          id: 1
        },
        {
          title: "Desktops",
          imageUrl: require("../../img/homepage-images/HomepageDeskTop.jpeg"),
          id: 2
        },
        {
          title: "Consoles",
          imageUrl: require("../../img/homepage-images/HomepageConsoles.jpg"),
          id: 3
        },

        {
          title: "Hardwares",
          imageUrl: require("../../img/homepage-images/HomepageHardwares.jpg"),
          id: 4
        },

        {
          title: "Appliances",
          imageUrl: require("../../img/homepage-images/HomepageAppliances.png"),

          id: 5
        },

        {
          title: "BTBB-Toys",
          imageUrl: require("../../img/homepage-images/HomepageToys.png"),
          size: "large",
          id: 6
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
