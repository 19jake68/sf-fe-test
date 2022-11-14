import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Bike Index Menu
   */
  bikeIndexMenu = [
    {
      name: 'FAQ',
      url: ''
    },
    {
      name: 'Blog',
      url: ''
    },
    {
      name: 'Help',
      url: ''
    },
    {
      name: 'About',
      url: ''
    },
    {
      name: 'Where We Are',
      url: ''
    },
    {
      name: 'Stolen Bike Recoveries',
      url: ''
    },
    {
      name: 'Get your stolen bike back',
      url: ''
    }
  ];

  /**
   * Support Us Menu
   */
  supportUsMenu = [
    {
      name: 'Donate',
      url: ''
    },
    {
      name: 'Store',
      url: ''
    },
    {
      name: 'Ambassadors',
      url: ''
    }
  ];

  /**
   * Resources Menu
   */
  resourcesMenu = [
    {
      name: 'API Documentation',
      url: ''
    },
    {
      name: 'Dev Resources',
      url: ''
    },
    {
      name: 'Design & Logos',
      url: ''
    },
    {
      name: 'Security',
      url: ''
    },
    {
      name: 'Bike Manufacturer List',
      url: ''
    },
    {
      name: 'Protect your bike',
      url: ''
    },
    {
      name: 'Stolen Bike Map',
      url: ''
    }
  ];

  /**
   * Who we serve Menu
   */
  whoWeServeMenu = [
    {
      name: 'Bike Shops',
      url: ''
    },
    {
      name: 'Schools and Universities',
      url: ''
    },
    {
      name: 'Cities',
      url: ''
    },
    {
      name: 'Law Enforcement',
      url: ''
    },
    {
      name: 'Community Groups',
      url: ''
    },
    {
      name: 'Press inquiries',
      url: ''
    }
  ];

  /**
   * Social icons
   */
  socialIcons = [
    {
      name: 'Facebook',
      icon: 'bi-facebook',
      url: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      icon: 'bi-twitter',
      url: 'https://twitter.com'
    },
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://instagram.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
