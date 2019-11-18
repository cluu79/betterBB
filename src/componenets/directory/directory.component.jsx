import React from 'react';
import MenuItem from './../../pages/menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'Laptops',
          imageUrl: require('../../img/homepage-images/HomepageLaptop.jpg'),
          id: 1,
          linkUrl: 'laptops'
        },
        {
          title: 'Desktops',
          imageUrl: require('../../img/homepage-images/HomepageDeskTop.jpeg'),
          id: 2
        },
        {
          title: 'Consoles',
          imageUrl: require('../../img/homepage-images/HomepageConsoles.jpg'),
          id: 3,
          linkUrl: ''
        },

        {
          title: 'Hardwares',
          imageUrl: require('../../img/homepage-images/HomepageHardwares.jpg'),
          id: 4,
          linkUrl: ''
        },

        {
          title: 'Appliances',
          imageUrl: require('../../img/homepage-images/HomepageAppliances.png'),

          id: 5,
          linkUrl: ''
        },

        {
          title: 'BTBB-Toys',
          imageUrl: require('../../img/homepage-images/HomepageToys.png'),
          size: 'large',
          id: 6,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
