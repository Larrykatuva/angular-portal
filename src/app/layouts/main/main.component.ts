import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-component',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  portal_url_list: any[] = [
    {
      "title": "Dashboard",
      "icon": "grid_view",
      "link": "",
      "expanded": false,
      "children": [
        {
          "title": "SubAgents",
          "icon": "horizontal_rule",
          "link": "/portal/sub-agents",
        },
        {
          "title": "Tenants",
          "icon": "person 4",
          "link": "/portal/sub-agents",
        }
      ]
    },
    {
      "title": "Products",
      "icon": "filter_center_focus",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Products",
          "icon": "inventory",
          "link": "/portal/products"
        },
        {
          "title": "Categories",
          "icon": "category",
          "link": "/portal/products/categories"
        },
        {
          "title": "Insurance Type",
          "icon": "radar",
          "link": "/portal/products/insurance-type"
        },
        {
          "title": "Banefits",
          "icon": "hail",
          "link": "/portal/products/benefits"
        },
        {
          "title": "Product Categories",
          "icon": "category",
          "link": "/portal/products/product-category"
        }
      ]
    },
    {
      "title": "Affiliates",
      "icon": "group",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Policies",
          "icon": "description",
          "link": "/portal/policies"
        },
        {
          "title": "Payments",
          "icon": "tram",
          "link": "/portal/providers/product-providers"
        }
      ]
    },
    {
      "title": "Events",
      "icon": "event",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Providers",
          "icon": "paragliding",
          "link": "/portal/providers"
        },
        {
          "title": "Product Providers",
          "icon": "tram",
          "link": "/portal/providers/product-providers"
        }
      ]
    },
    {
      "title": "Earnings",
      "icon": "attach_money",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Comprehensive Costings",
          "icon": "subway",
          "link": "/portal/motor-costing/comprehesive"
        },
        {
          "title": "ThirdParty Costings",
          "icon": "tram",
          "link": "/portal/motor-costing/third-party"
        }
      ]
    }
  ]

  toggle: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar = (): void => {
    if (this.toggle) {
      this.toggle = false
    } else {
      this.toggle = true
    }
  }


}

