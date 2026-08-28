# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-1.spec.ts >> Nopcommerce tests >> Nopcommerce login
- Location: tests/test-1.spec.ts:16:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' })
Expected: visible
Error: strict mode violation: locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' }) resolved to 2 elements:
    1) <li class="nav-item has-treeview">…</li> aka getByText('Customers Customers Customer')
    2) <li class="nav-item has-treeview">…</li> aka getByText('Reports PowerBI Sales summary')

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - list [ref=e4]:
      - listitem [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: "#"
    - link [ref=e8] [cursor=pointer]:
      - /url: /Admin
    - list [ref=e10]:
      - listitem
      - listitem [ref=e11]:
        - link "John Smith":
          - /url: "#"
      - listitem [ref=e12]:
        - link "Logout" [ref=e13] [cursor=pointer]:
          - /url: /logout
      - listitem
      - listitem [ref=e14]:
        - link [ref=e15] [cursor=pointer]:
          - /url: "#"
  - complementary [ref=e17]:
    - link "logo.png" [ref=e18] [cursor=pointer]:
      - /url: /Admin
      - img "logo.png" [ref=e19]
    - generic [ref=e20]:
      - textbox "Search" [ref=e24]
      - navigation [ref=e25]:
        - menu [ref=e26]:
          - listitem [ref=e27]:
            - link "Dashboard" [ref=e28] [cursor=pointer]:
              - /url: /Admin
              - paragraph [ref=e30]: Dashboard
          - listitem [ref=e31]:
            - link "Catalog" [ref=e32] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e34]: Catalog
          - listitem [ref=e36]:
            - link "Sales" [ref=e37] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e39]: Sales
          - listitem [ref=e41]:
            - link "Customers" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e44]: Customers
          - listitem [ref=e46]:
            - link "Promotions" [ref=e47] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e49]: Promotions
          - listitem [ref=e51]:
            - link "Content management" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e54]: Content management
          - listitem [ref=e56]:
            - link "Configuration" [ref=e57] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e59]: Configuration
          - listitem [ref=e61]:
            - link "System" [ref=e62] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e64]: System
          - listitem [ref=e66]:
            - link "Reports" [ref=e67] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e69]: Reports
          - listitem [ref=e71]:
            - link "Help" [ref=e72] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e74]: Help
  - generic [ref=e76]:
    - generic [ref=e78]:
      - button [ref=e79] [cursor=pointer]: ×
      - generic [ref=e80]:
        - text: The store has some error(s) or warning(s). Please find more information on the
        - link "Warnings" [ref=e81] [cursor=pointer]:
          - /url: /Admin/Common/Warnings
        - text: page
    - heading "Dashboard" [level=1] [ref=e83]
    - generic [ref=e88]:
      - generic [ref=e91]:
        - generic [ref=e92]:
          - generic [ref=e93]: NopCommerce News
          - button [ref=e96] [cursor=pointer]
        - generic [ref=e99]:
          - generic [ref=e101]:
            - link "PayPal Commerce" [ref=e103] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
            - generic [ref=e104]:
              - text: PayPal Commerce delivers a complete payments platform with the global scale and flexibility your business needs to stay competitive.
              - link "Download" [ref=e105] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
              - text: the plugin.
          - generic [ref=e107]:
            - link "\"Powered by nopCommerce\" link" [ref=e109] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
            - generic [ref=e110]:
              - text: Would you like to remove the "Powered by nopCommerce" link in the bottom of the footer? Click
              - link "here" [ref=e111] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
              - text: for more info.
          - generic [ref=e113]:
            - link "Recommended hosting for your store" [ref=e115] [cursor=pointer]:
              - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
            - generic [ref=e116]:
              - text: Everleap cloud hosting seamlessly scales sites with ease and they move stores for free.
              - link "Learn more" [ref=e117] [cursor=pointer]:
                - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
              - text: and get a 30 day free trial.
      - generic [ref=e120]:
        - generic [ref=e121]:
          - generic [ref=e122]: Common statistics
          - button [ref=e125] [cursor=pointer]
        - generic [ref=e128]:
          - generic [ref=e130]:
            - generic [ref=e131]:
              - heading "5" [level=3] [ref=e132]
              - paragraph [ref=e133]: Orders
            - generic [ref=e134]: 
            - link "More info" [ref=e135] [cursor=pointer]:
              - /url: /Admin/Order/List
              - text: More info
          - generic [ref=e138]:
            - generic [ref=e139]:
              - heading "0" [level=3] [ref=e140]
              - paragraph [ref=e141]: Pending return requests
            - generic [ref=e142]: 
            - link "More info" [ref=e143] [cursor=pointer]:
              - /url: /Admin/ReturnRequest/List
              - text: More info
          - generic [ref=e146]:
            - generic [ref=e147]:
              - heading "8" [level=3] [ref=e148]
              - paragraph [ref=e149]: Registered customers
            - generic [ref=e150]: 
            - link "More info" [ref=e151] [cursor=pointer]:
              - /url: /Admin/Customer/List
              - text: More info
          - generic [ref=e154]:
            - generic [ref=e155]:
              - heading "1" [level=3] [ref=e156]
              - paragraph [ref=e157]: Low stock products
            - generic [ref=e158]: 
            - link "More info" [ref=e159] [cursor=pointer]:
              - /url: /Admin/Report/LowStock
              - text: More info
      - generic [ref=e161]:
        - generic [ref=e164]:
          - heading "Orders" [level=3] [ref=e165]: Orders
          - generic [ref=e167]:
            - button "Year" [ref=e168] [cursor=pointer]
            - button "Month" [ref=e169] [cursor=pointer]
            - button "Week" [ref=e170] [cursor=pointer]
            - button [ref=e171] [cursor=pointer]
        - generic [ref=e178]:
          - heading "New customers" [level=3] [ref=e179]: New customers
          - generic [ref=e181]:
            - button "Year" [ref=e182] [cursor=pointer]
            - button "Month" [ref=e183] [cursor=pointer]
            - button "Week" [ref=e184] [cursor=pointer]
            - button [ref=e185] [cursor=pointer]
      - generic [ref=e190]:
        - generic [ref=e192]:
          - generic [ref=e193]:
            - heading "Order totals" [level=3] [ref=e194]: Order totals
            - button [ref=e197] [cursor=pointer]
          - generic [ref=e201]:
            - generic [ref=e204]:
              - table [ref=e207]:
                - rowgroup [ref=e208]:
                  - row "Order Status Today This Week This Month This Year All time" [ref=e209]:
                    - columnheader "Order Status" [ref=e210]:
                      - generic [ref=e212]: Order Status
                    - columnheader "Today" [ref=e213]:
                      - generic [ref=e215]: Today
                    - columnheader "This Week" [ref=e216]:
                      - generic [ref=e218]: This Week
                    - columnheader "This Month" [ref=e219]:
                      - generic [ref=e221]: This Month
                    - columnheader "This Year" [ref=e222]:
                      - generic [ref=e224]: This Year
                    - columnheader "All time" [ref=e225]:
                      - generic [ref=e227]: All time
              - table [ref=e236]:
                - rowgroup:
                  - row "Order Status Today This Week This Month This Year All time":
                    - columnheader "Order Status":
                      - generic [ref=e238]: Order Status
                    - columnheader "Today":
                      - generic [ref=e240]: Today
                    - columnheader "This Week":
                      - generic [ref=e242]: This Week
                    - columnheader "This Month":
                      - generic [ref=e244]: This Month
                    - columnheader "This Year":
                      - generic [ref=e246]: This Year
                    - columnheader "All time":
                      - generic [ref=e248]: All time
                - rowgroup [ref=e249]:
                  - row "Pending $0.00 $0.00 $0.00 $0.00 $2,570.80" [ref=e250]:
                    - cell "Pending" [ref=e251]
                    - cell "$0.00" [ref=e252]
                    - cell "$0.00" [ref=e253]
                    - cell "$0.00" [ref=e254]
                    - cell "$0.00" [ref=e255]
                    - cell "$2,570.80" [ref=e256]
                  - row "Processing $0.00 $0.00 $0.00 $0.00 $43.50" [ref=e257]:
                    - cell "Processing" [ref=e258]
                    - cell "$0.00" [ref=e259]
                    - cell "$0.00" [ref=e260]
                    - cell "$0.00" [ref=e261]
                    - cell "$0.00" [ref=e262]
                    - cell "$43.50" [ref=e263]
                  - row "Complete $0.00 $0.00 $0.00 $0.00 $0.00" [ref=e264]:
                    - cell "Complete" [ref=e265]
                    - cell "$0.00" [ref=e266]
                    - cell "$0.00" [ref=e267]
                    - cell "$0.00" [ref=e268]
                    - cell "$0.00" [ref=e269]
                    - cell "$0.00" [ref=e270]
                  - row "Cancelled $0.00 $0.00 $0.00 $0.00 $1,855.00" [ref=e271]:
                    - cell "Cancelled" [ref=e272]
                    - cell "$0.00" [ref=e273]
                    - cell "$0.00" [ref=e274]
                    - cell "$0.00" [ref=e275]
                    - cell "$0.00" [ref=e276]
                    - cell "$1,855.00" [ref=e277]
              - generic:
                - generic:
                  - table
            - button [ref=e281] [cursor=pointer]
        - generic [ref=e285]:
          - generic [ref=e286]:
            - heading "Incomplete orders" [level=3] [ref=e287]: Incomplete orders
            - button [ref=e290] [cursor=pointer]
          - generic [ref=e294]:
            - generic [ref=e297]:
              - table [ref=e300]:
                - rowgroup [ref=e301]:
                  - row "Item Total Count" [ref=e302]:
                    - columnheader "Item" [ref=e303]:
                      - generic [ref=e305]: Item
                    - columnheader "Total" [ref=e306]:
                      - generic [ref=e308]: Total
                    - columnheader "Count" [ref=e309]:
                      - generic [ref=e311]: Count
              - table [ref=e317]:
                - rowgroup:
                  - row "Item Total Count":
                    - columnheader "Item":
                      - generic [ref=e319]: Item
                    - columnheader "Total":
                      - generic [ref=e321]: Total
                    - columnheader "Count":
                      - generic [ref=e323]: Count
                - rowgroup [ref=e324]:
                  - row "Total unpaid orders (pending payment status) $2,468.80 2 - view all" [ref=e325]:
                    - cell "Total unpaid orders (pending payment status)" [ref=e326]
                    - cell "$2,468.80" [ref=e327]
                    - cell "2 - view all" [ref=e328]:
                      - link "2 - view all" [ref=e329] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10,20,30&paymentStatuses=10
                        - text: 2 - view all
                  - row "Total not yet shipped orders $2,460.00 1 - view all" [ref=e331]:
                    - cell "Total not yet shipped orders" [ref=e332]
                    - cell "$2,460.00" [ref=e333]
                    - cell "1 - view all" [ref=e334]:
                      - link "1 - view all" [ref=e335] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10,20,30&shippingStatuses=20
                        - text: 1 - view all
                  - row "Total incomplete orders (pending order status) $2,570.80 3 - view all" [ref=e337]:
                    - cell "Total incomplete orders (pending order status)" [ref=e338]
                    - cell "$2,570.80" [ref=e339]
                    - cell "3 - view all" [ref=e340]:
                      - link "3 - view all" [ref=e341] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10
                        - text: 3 - view all
              - generic:
                - generic:
                  - table
            - button [ref=e346] [cursor=pointer]
      - generic [ref=e349]:
        - generic [ref=e351]:
          - generic [ref=e352]:
            - heading "Latest Orders View All Orders" [level=3] [ref=e353]:
              - text: Latest Orders
              - link "View All Orders" [ref=e355] [cursor=pointer]:
                - /url: /Admin/Order/List
            - button [ref=e357] [cursor=pointer]
          - generic [ref=e361]:
            - generic [ref=e364]:
              - table [ref=e367]:
                - rowgroup [ref=e368]:
                  - 'row "Order # Order status Customer Created on View" [ref=e369]':
                    - 'columnheader "Order #" [ref=e370]':
                      - generic [ref=e372]: "Order #"
                    - columnheader "Order status" [ref=e373]:
                      - generic [ref=e375]: Order status
                    - columnheader "Customer" [ref=e376]:
                      - generic [ref=e378]: Customer
                    - columnheader "Created on" [ref=e379]:
                      - generic [ref=e381]: Created on
                    - columnheader "View" [ref=e382]:
                      - generic [ref=e384]: View
              - table [ref=e392]:
                - rowgroup:
                  - 'row "Order # Order status Customer Created on View"':
                    - 'columnheader "Order #"':
                      - generic [ref=e394]: "Order #"
                    - columnheader "Order status":
                      - generic [ref=e396]: Order status
                    - columnheader "Customer":
                      - generic [ref=e398]: Customer
                    - columnheader "Created on":
                      - generic [ref=e400]: Created on
                    - columnheader "View":
                      - generic [ref=e402]: View
                - rowgroup [ref=e403]:
                  - row "5 Processing Victoria Terces (victoria_victoria@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e404]:
                    - cell "5" [ref=e405]
                    - cell "Processing" [ref=e406]
                    - cell "Victoria Terces (victoria_victoria@nopCommerce.com)" [ref=e407]
                    - cell "11/04/2025 2:32:26 AM" [ref=e408]
                    - cell "View" [ref=e409]:
                      - link "View" [ref=e410] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/5
                        - text: View
                  - row "4 Pending Brenda Lindgren (brenda_lindgren@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e412]:
                    - cell "4" [ref=e413]
                    - cell "Pending" [ref=e414]
                    - cell "Brenda Lindgren (brenda_lindgren@nopCommerce.com)" [ref=e415]
                    - cell "11/04/2025 2:32:26 AM" [ref=e416]
                    - cell "View" [ref=e417]:
                      - link "View" [ref=e418] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/4
                        - text: View
                  - row "3 Pending James Pan (james_pan@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e420]:
                    - cell "3" [ref=e421]
                    - cell "Pending" [ref=e422]
                    - cell "James Pan (james_pan@nopCommerce.com)" [ref=e423]
                    - cell "11/04/2025 2:32:26 AM" [ref=e424]
                    - cell "View" [ref=e425]:
                      - link "View" [ref=e426] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/3
                        - text: View
                  - row "2 Pending Arthur Holmes (arthur_holmes@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e428]:
                    - cell "2" [ref=e429]
                    - cell "Pending" [ref=e430]
                    - cell "Arthur Holmes (arthur_holmes@nopCommerce.com)" [ref=e431]
                    - cell "11/04/2025 2:32:26 AM" [ref=e432]
                    - cell "View" [ref=e433]:
                      - link "View" [ref=e434] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/2
                        - text: View
                  - row "1 Cancelled Steve Gates (steve_gates@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e436]:
                    - cell "1" [ref=e437]
                    - cell "Cancelled" [ref=e438]
                    - cell "Steve Gates (steve_gates@nopCommerce.com)" [ref=e439]
                    - cell "11/04/2025 2:32:26 AM" [ref=e440]
                    - cell "View" [ref=e441]:
                      - link "View" [ref=e442] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/1
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e445]:
              - navigation "pagination" [ref=e447]:
                - list [ref=e448]:
                  - listitem [ref=e449]:
                    - generic "Previous"
                  - listitem [ref=e450]:
                    - link "1" [ref=e451] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e452]:
                    - generic "Next"
              - status [ref=e453]: 1-5 of 5 items
        - generic [ref=e455]:
          - generic [ref=e456]:
            - heading "Popular search keywords" [level=3] [ref=e457]: Popular search keywords
            - button [ref=e460] [cursor=pointer]
          - generic [ref=e464]:
            - generic [ref=e467]:
              - table [ref=e470]:
                - rowgroup [ref=e471]:
                  - row "Keyword Count" [ref=e472]:
                    - columnheader "Keyword" [ref=e473]:
                      - generic [ref=e475]: Keyword
                    - columnheader "Count" [ref=e476]:
                      - generic [ref=e478]: Count
              - table [ref=e483]:
                - rowgroup:
                  - row "Keyword Count":
                    - columnheader "Keyword":
                      - generic [ref=e485]: Keyword
                    - columnheader "Count":
                      - generic [ref=e487]: Count
                - rowgroup [ref=e488]:
                  - row "computer 34" [ref=e489]:
                    - cell "computer" [ref=e490]
                    - cell "34" [ref=e491]
                  - row "camera 30" [ref=e492]:
                    - cell "camera" [ref=e493]
                    - cell "30" [ref=e494]
                  - row "jewelry 27" [ref=e495]:
                    - cell "jewelry" [ref=e496]
                    - cell "27" [ref=e497]
                  - row "shoes 26" [ref=e498]:
                    - cell "shoes" [ref=e499]
                    - cell "26" [ref=e500]
                  - row "jeans 19" [ref=e501]:
                    - cell "jeans" [ref=e502]
                    - cell "19" [ref=e503]
              - generic:
                - generic:
                  - table
            - generic [ref=e505]:
              - navigation "pagination" [ref=e507]:
                - list [ref=e508]:
                  - listitem [ref=e509]:
                    - generic "Previous"
                  - listitem [ref=e510]:
                    - link "1" [ref=e511] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e512]:
                    - link "Next" [ref=e513] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e514]: 1-5 of 6 items
      - generic [ref=e515]:
        - generic [ref=e517]:
          - generic [ref=e518]:
            - heading "Bestsellers by quantity" [level=3] [ref=e519]: Bestsellers by quantity
            - button [ref=e522] [cursor=pointer]
          - generic [ref=e526]:
            - generic [ref=e529]:
              - table [ref=e532]:
                - rowgroup [ref=e533]:
                  - row "Name Total quantity Total amount (excl tax) View" [ref=e534]:
                    - columnheader "Name" [ref=e535]:
                      - generic [ref=e537]: Name
                    - columnheader "Total quantity" [ref=e538]:
                      - generic [ref=e540]: Total quantity
                    - columnheader "Total amount (excl tax)" [ref=e541]:
                      - generic [ref=e543]: Total amount (excl tax)
                    - columnheader "View" [ref=e544]:
                      - generic [ref=e546]: View
              - table [ref=e553]:
                - rowgroup:
                  - row "Name Total quantity Total amount (excl tax) View":
                    - columnheader "Name":
                      - generic [ref=e555]: Name
                    - columnheader "Total quantity":
                      - generic [ref=e557]: Total quantity
                    - columnheader "Total amount (excl tax)":
                      - generic [ref=e559]: Total amount (excl tax)
                    - columnheader "View":
                      - generic [ref=e561]: View
                - rowgroup [ref=e562]:
                  - row "Leica T Mirrorless Digital Camera 1 $530.00 View" [ref=e563]:
                    - cell "Leica T Mirrorless Digital Camera" [ref=e564]
                    - cell "1" [ref=e565]
                    - cell "$530.00" [ref=e566]
                    - cell "View" [ref=e567]:
                      - link "View" [ref=e568] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/16
                        - text: View
                  - row "Apple iCam 1 $1,300.00 View" [ref=e570]:
                    - cell "Apple iCam" [ref=e571]
                    - cell "1" [ref=e572]
                    - cell "$1,300.00" [ref=e573]
                    - cell "View" [ref=e574]:
                      - link "View" [ref=e575] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/17
                        - text: View
                  - row "Levi's 511 Jeans 1 $43.50 View" [ref=e577]:
                    - cell "Levi's 511 Jeans" [ref=e578]
                    - cell "1" [ref=e579]
                    - cell "$43.50" [ref=e580]
                    - cell "View" [ref=e581]:
                      - link "View" [ref=e582] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/32
                        - text: View
                  - row "Fahrenheit 451 by Ray Bradbury 1 $27.00 View" [ref=e584]:
                    - cell "Fahrenheit 451 by Ray Bradbury" [ref=e585]
                    - cell "1" [ref=e586]
                    - cell "$27.00" [ref=e587]
                    - cell "View" [ref=e588]:
                      - link "View" [ref=e589] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/36
                        - text: View
                  - row "First Prize Pies 1 $51.00 View" [ref=e591]:
                    - cell "First Prize Pies" [ref=e592]
                    - cell "1" [ref=e593]
                    - cell "$51.00" [ref=e594]
                    - cell "View" [ref=e595]:
                      - link "View" [ref=e596] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/37
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e599]:
              - navigation "pagination" [ref=e601]:
                - list [ref=e602]:
                  - listitem [ref=e603]:
                    - generic "Previous"
                  - listitem [ref=e604]:
                    - link "1" [ref=e605] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e606]:
                    - link "2" [ref=e607] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e608]:
                    - link "3" [ref=e609] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e610]:
                    - link "Next" [ref=e611] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e612]: 1-5 of 12 items
        - generic [ref=e614]:
          - generic [ref=e615]:
            - heading "Bestsellers by amount" [level=3] [ref=e616]: Bestsellers by amount
            - button [ref=e619] [cursor=pointer]
          - generic [ref=e623]:
            - generic [ref=e626]:
              - table [ref=e629]:
                - rowgroup [ref=e630]:
                  - row "Name Total quantity Total amount (excl tax) View" [ref=e631]:
                    - columnheader "Name" [ref=e632]:
                      - generic [ref=e634]: Name
                    - columnheader "Total quantity" [ref=e635]:
                      - generic [ref=e637]: Total quantity
                    - columnheader "Total amount (excl tax)" [ref=e638]:
                      - generic [ref=e640]: Total amount (excl tax)
                    - columnheader "View" [ref=e641]:
                      - generic [ref=e643]: View
              - table [ref=e650]:
                - rowgroup:
                  - row "Name Total quantity Total amount (excl tax) View":
                    - columnheader "Name":
                      - generic [ref=e652]: Name
                    - columnheader "Total quantity":
                      - generic [ref=e654]: Total quantity
                    - columnheader "Total amount (excl tax)":
                      - generic [ref=e656]: Total amount (excl tax)
                    - columnheader "View":
                      - generic [ref=e658]: View
                - rowgroup [ref=e659]:
                  - row "Vintage Style Engagement Ring 1 $2,100.00 View" [ref=e660]:
                    - cell "Vintage Style Engagement Ring" [ref=e661]
                    - cell "1" [ref=e662]
                    - cell "$2,100.00" [ref=e663]
                    - cell "View" [ref=e664]:
                      - link "View" [ref=e665] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/41
                        - text: View
                  - row "Apple iCam 1 $1,300.00 View" [ref=e667]:
                    - cell "Apple iCam" [ref=e668]
                    - cell "1" [ref=e669]
                    - cell "$1,300.00" [ref=e670]
                    - cell "View" [ref=e671]:
                      - link "View" [ref=e672] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/17
                        - text: View
                  - row "Leica T Mirrorless Digital Camera 1 $530.00 View" [ref=e674]:
                    - cell "Leica T Mirrorless Digital Camera" [ref=e675]
                    - cell "1" [ref=e676]
                    - cell "$530.00" [ref=e677]
                    - cell "View" [ref=e678]:
                      - link "View" [ref=e679] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/16
                        - text: View
                  - row "Flower Girl Bracelet 1 $360.00 View" [ref=e681]:
                    - cell "Flower Girl Bracelet" [ref=e682]
                    - cell "1" [ref=e683]
                    - cell "$360.00" [ref=e684]
                    - cell "View" [ref=e685]:
                      - link "View" [ref=e686] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/40
                        - text: View
                  - row "First Prize Pies 1 $51.00 View" [ref=e688]:
                    - cell "First Prize Pies" [ref=e689]
                    - cell "1" [ref=e690]
                    - cell "$51.00" [ref=e691]
                    - cell "View" [ref=e692]:
                      - link "View" [ref=e693] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/37
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e696]:
              - navigation "pagination" [ref=e698]:
                - list [ref=e699]:
                  - listitem [ref=e700]:
                    - generic "Previous"
                  - listitem [ref=e701]:
                    - link "1" [ref=e702] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e703]:
                    - link "2" [ref=e704] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e705]:
                    - link "3" [ref=e706] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e707]:
                    - link "Next" [ref=e708] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e709]: 1-5 of 12 items
  - generic [ref=e713]:
    - generic [ref=e714]:
      - text: Powered by
      - link "nopCommerce" [ref=e715] [cursor=pointer]:
        - /url: https://www.nopcommerce.com/?utm_source=demo-admin-panel&utm_medium=footer&utm_campaign=admin-panel
    - generic [ref=e716]: Monday, August 24, 2026 4:32 PM
    - generic [ref=e717]: nopCommerce version 4.90.4
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  | import { log } from '../../helpers/logger';
  3  | 
  4  | export default class BasePage {
  5  |     readonly page: Page;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |     };
  10 | 
  11 |     async navigateTo(url: string) {
  12 |         await log('info', `Navigating to path ${url}`);
  13 |         await this.page.goto(url);
  14 |     };
  15 | 
  16 |     async click(element: Locator) {
  17 |         try {
> 18 |             await expect(element).toBeVisible({ timeout: 10_000 });
     |                                   ^ Error: expect(locator).toBeVisible() failed
  19 |             await element.click();
  20 |         } catch (error) {
  21 |             await log('error', `Failed to click ${element.toString()}, error: ${error}`);
  22 |             throw error;
  23 |         };
  24 |     };
  25 | 
  26 |     async type(element: Locator, text: string) {
  27 |         try {
  28 |             await expect(element).toBeVisible({ timeout: 10_000 });
  29 |             await element.fill(text);
  30 |         } catch (error) {
  31 |             await log('error', `Failed to type on element ${element.toString()}, error: ${error}`);
  32 |             throw error;
  33 |         };
  34 |     };
  35 | 
  36 |     async select(element: Locator, text: string) {
  37 |         try {
  38 |             await expect(element).toBeVisible({ timeout: 10_000 });
  39 |             await element.selectOption(text);
  40 |         } catch (error) {
  41 |             await log('error', `Failed to select option on ${element.toString()}, error: ${error}`);
  42 |             throw error;
  43 |         };
  44 |     };
  45 | 
  46 |     async check(element: Locator) {
  47 |         try {
  48 |             await expect(element).toBeVisible({ timeout: 10_000 });
  49 |             await element.check();
  50 |         } catch (error) {
  51 |             await log('error', `Failed to check element ${element.toString()}, error: ${error}`);
  52 |             throw error;
  53 |         };
  54 |     };
  55 | 
  56 |     async assertText(element: Locator, message: string) {
  57 |         try {
  58 |             await expect(element).toBeVisible({ timeout: 10_000 });
  59 |             await expect(element).toHaveText(message);
  60 |         } catch (error) {
  61 |             await log('error', `Failed to assert on text element ${element.toString()}, error: ${error}`);
  62 |             throw error;
  63 |         };
  64 |     };
  65 | 
  66 |     async assertElementIsVisible(element: Locator) {
  67 |         try {
  68 |             await expect(element).toBeVisible({ timeout: 10_000 });
  69 |         } catch (error) {
  70 |             await log('error', `Failed to assert on element visibility ${element.toString()}, error: ${error}`);
  71 |             throw error;
  72 |         };
  73 |     };
  74 | };
  75 | 
  76 | 
  77 | 
  78 | 
```