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

Locator: locator('li[class*="menu-is-opening"] > ul.nav-treeview > li > a > p').filter({ hasText: 'Customers' })
Expected: visible
Error: strict mode violation: locator('li[class*="menu-is-opening"] > ul.nav-treeview > li > a > p').filter({ hasText: 'Customers' }) resolved to 2 elements:
    1) <p> Customers</p> aka getByRole('link', { name: 'Customers' }).nth(1)
    2) <p> Online customers</p> aka getByRole('link', { name: 'Online customers' })

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('li[class*="menu-is-opening"] > ul.nav-treeview > li > a > p').filter({ hasText: 'Customers' })

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
            - link "Customers" [active] [ref=e42] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e44]: Customers
            - list [ref=e46]:
              - listitem [ref=e47]:
                - link "Customers" [ref=e48] [cursor=pointer]:
                  - /url: /Admin/Customer/List
                  - paragraph [ref=e50]: Customers
              - listitem [ref=e51]:
                - link "Customer roles" [ref=e52] [cursor=pointer]:
                  - /url: /Admin/CustomerRole/List
                  - paragraph [ref=e54]: Customer roles
              - listitem [ref=e55]:
                - link "Online customers" [ref=e56] [cursor=pointer]:
                  - /url: /Admin/OnlineCustomer/List
                  - paragraph [ref=e58]: Online customers
              - listitem [ref=e59]:
                - link "Vendors" [ref=e60] [cursor=pointer]:
                  - /url: /Admin/Vendor/List
                  - paragraph [ref=e62]: Vendors
              - listitem [ref=e63]:
                - link "Activity log" [ref=e64] [cursor=pointer]:
                  - /url: /Admin/ActivityLog/ActivityLogs
                  - paragraph [ref=e66]: Activity log
              - listitem [ref=e67]:
                - link "Activity Types" [ref=e68] [cursor=pointer]:
                  - /url: /Admin/ActivityLog/ActivityTypes
                  - paragraph [ref=e70]: Activity Types
              - listitem [ref=e71]:
                - link "GDPR requests (log)" [ref=e72] [cursor=pointer]:
                  - /url: /Admin/Customer/GdprLog
                  - paragraph [ref=e74]: GDPR requests (log)
          - listitem [ref=e75]:
            - link "Promotions" [ref=e76] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e78]: Promotions
          - listitem [ref=e80]:
            - link "Content management" [ref=e81] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e83]: Content management
          - listitem [ref=e85]:
            - link "Configuration" [ref=e86] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e88]: Configuration
          - listitem [ref=e90]:
            - link "System" [ref=e91] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e93]: System
          - listitem [ref=e95]:
            - link "Reports" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e98]: Reports
          - listitem [ref=e100]:
            - link "Help" [ref=e101] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e103]: Help
  - generic [ref=e105]:
    - generic [ref=e107]:
      - button [ref=e108] [cursor=pointer]: ×
      - generic [ref=e109]:
        - text: The store has some error(s) or warning(s). Please find more information on the
        - link "Warnings" [ref=e110] [cursor=pointer]:
          - /url: /Admin/Common/Warnings
        - text: page
    - heading "Dashboard" [level=1] [ref=e112]
    - generic [ref=e117]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - generic [ref=e122]: NopCommerce News
          - button [ref=e125] [cursor=pointer]
        - generic [ref=e128]:
          - generic [ref=e130]:
            - link "PayPal Commerce" [ref=e132] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
            - generic [ref=e133]:
              - text: PayPal Commerce delivers a complete payments platform with the global scale and flexibility your business needs to stay competitive.
              - link "Download" [ref=e134] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
              - text: the plugin.
          - generic [ref=e136]:
            - link "\"Powered by nopCommerce\" link" [ref=e138] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
            - generic [ref=e139]:
              - text: Would you like to remove the "Powered by nopCommerce" link in the bottom of the footer? Click
              - link "here" [ref=e140] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
              - text: for more info.
          - generic [ref=e142]:
            - link "Recommended hosting for your store" [ref=e144] [cursor=pointer]:
              - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
            - generic [ref=e145]:
              - text: Everleap cloud hosting seamlessly scales sites with ease and they move stores for free.
              - link "Learn more" [ref=e146] [cursor=pointer]:
                - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
              - text: and get a 30 day free trial.
      - generic [ref=e149]:
        - generic [ref=e150]:
          - generic [ref=e151]: Common statistics
          - button [ref=e154] [cursor=pointer]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e160]:
              - heading "5" [level=3] [ref=e161]
              - paragraph [ref=e162]: Orders
            - generic [ref=e163]: 
            - link "More info" [ref=e164] [cursor=pointer]:
              - /url: /Admin/Order/List
              - text: More info
          - generic [ref=e167]:
            - generic [ref=e168]:
              - heading "0" [level=3] [ref=e169]
              - paragraph [ref=e170]: Pending return requests
            - generic [ref=e171]: 
            - link "More info" [ref=e172] [cursor=pointer]:
              - /url: /Admin/ReturnRequest/List
              - text: More info
          - generic [ref=e175]:
            - generic [ref=e176]:
              - heading "8" [level=3] [ref=e177]
              - paragraph [ref=e178]: Registered customers
            - generic [ref=e179]: 
            - link "More info" [ref=e180] [cursor=pointer]:
              - /url: /Admin/Customer/List
              - text: More info
          - generic [ref=e183]:
            - generic [ref=e184]:
              - heading "1" [level=3] [ref=e185]
              - paragraph [ref=e186]: Low stock products
            - generic [ref=e187]: 
            - link "More info" [ref=e188] [cursor=pointer]:
              - /url: /Admin/Report/LowStock
              - text: More info
      - generic [ref=e190]:
        - generic [ref=e193]:
          - heading "Orders" [level=3] [ref=e194]: Orders
          - generic [ref=e196]:
            - button "Year" [ref=e197] [cursor=pointer]
            - button "Month" [ref=e198] [cursor=pointer]
            - button "Week" [ref=e199] [cursor=pointer]
            - button [ref=e200] [cursor=pointer]
        - generic [ref=e207]:
          - heading "New customers" [level=3] [ref=e208]: New customers
          - generic [ref=e210]:
            - button "Year" [ref=e211] [cursor=pointer]
            - button "Month" [ref=e212] [cursor=pointer]
            - button "Week" [ref=e213] [cursor=pointer]
            - button [ref=e214] [cursor=pointer]
      - generic [ref=e219]:
        - generic [ref=e221]:
          - generic [ref=e222]:
            - heading "Order totals" [level=3] [ref=e223]: Order totals
            - button [ref=e226] [cursor=pointer]
          - generic [ref=e230]:
            - generic [ref=e233]:
              - table [ref=e236]:
                - rowgroup [ref=e237]:
                  - row "Order Status Today This Week This Month This Year All time" [ref=e238]:
                    - columnheader "Order Status" [ref=e239]:
                      - generic [ref=e241]: Order Status
                    - columnheader "Today" [ref=e242]:
                      - generic [ref=e244]: Today
                    - columnheader "This Week" [ref=e245]:
                      - generic [ref=e247]: This Week
                    - columnheader "This Month" [ref=e248]:
                      - generic [ref=e250]: This Month
                    - columnheader "This Year" [ref=e251]:
                      - generic [ref=e253]: This Year
                    - columnheader "All time" [ref=e254]:
                      - generic [ref=e256]: All time
              - table [ref=e265]:
                - rowgroup:
                  - row "Order Status Today This Week This Month This Year All time":
                    - columnheader "Order Status":
                      - generic [ref=e267]: Order Status
                    - columnheader "Today":
                      - generic [ref=e269]: Today
                    - columnheader "This Week":
                      - generic [ref=e271]: This Week
                    - columnheader "This Month":
                      - generic [ref=e273]: This Month
                    - columnheader "This Year":
                      - generic [ref=e275]: This Year
                    - columnheader "All time":
                      - generic [ref=e277]: All time
                - rowgroup [ref=e278]:
                  - row "Pending $0.00 $0.00 $0.00 $0.00 $2,570.80" [ref=e279]:
                    - cell "Pending" [ref=e280]
                    - cell "$0.00" [ref=e281]
                    - cell "$0.00" [ref=e282]
                    - cell "$0.00" [ref=e283]
                    - cell "$0.00" [ref=e284]
                    - cell "$2,570.80" [ref=e285]
                  - row "Processing $0.00 $0.00 $0.00 $0.00 $43.50" [ref=e286]:
                    - cell "Processing" [ref=e287]
                    - cell "$0.00" [ref=e288]
                    - cell "$0.00" [ref=e289]
                    - cell "$0.00" [ref=e290]
                    - cell "$0.00" [ref=e291]
                    - cell "$43.50" [ref=e292]
                  - row "Complete $0.00 $0.00 $0.00 $0.00 $0.00" [ref=e293]:
                    - cell "Complete" [ref=e294]
                    - cell "$0.00" [ref=e295]
                    - cell "$0.00" [ref=e296]
                    - cell "$0.00" [ref=e297]
                    - cell "$0.00" [ref=e298]
                    - cell "$0.00" [ref=e299]
                  - row "Cancelled $0.00 $0.00 $0.00 $0.00 $1,855.00" [ref=e300]:
                    - cell "Cancelled" [ref=e301]
                    - cell "$0.00" [ref=e302]
                    - cell "$0.00" [ref=e303]
                    - cell "$0.00" [ref=e304]
                    - cell "$0.00" [ref=e305]
                    - cell "$1,855.00" [ref=e306]
              - generic:
                - generic:
                  - table
            - button [ref=e310] [cursor=pointer]
        - generic [ref=e314]:
          - generic [ref=e315]:
            - heading "Incomplete orders" [level=3] [ref=e316]: Incomplete orders
            - button [ref=e319] [cursor=pointer]
          - generic [ref=e323]:
            - generic [ref=e326]:
              - table [ref=e329]:
                - rowgroup [ref=e330]:
                  - row "Item Total Count" [ref=e331]:
                    - columnheader "Item" [ref=e332]:
                      - generic [ref=e334]: Item
                    - columnheader "Total" [ref=e335]:
                      - generic [ref=e337]: Total
                    - columnheader "Count" [ref=e338]:
                      - generic [ref=e340]: Count
              - table [ref=e346]:
                - rowgroup:
                  - row "Item Total Count":
                    - columnheader "Item":
                      - generic [ref=e348]: Item
                    - columnheader "Total":
                      - generic [ref=e350]: Total
                    - columnheader "Count":
                      - generic [ref=e352]: Count
                - rowgroup [ref=e353]:
                  - row "Total unpaid orders (pending payment status) $2,468.80 2 - view all" [ref=e354]:
                    - cell "Total unpaid orders (pending payment status)" [ref=e355]
                    - cell "$2,468.80" [ref=e356]
                    - cell "2 - view all" [ref=e357]:
                      - link "2 - view all" [ref=e358] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10,20,30&paymentStatuses=10
                        - text: 2 - view all
                  - row "Total not yet shipped orders $2,460.00 1 - view all" [ref=e360]:
                    - cell "Total not yet shipped orders" [ref=e361]
                    - cell "$2,460.00" [ref=e362]
                    - cell "1 - view all" [ref=e363]:
                      - link "1 - view all" [ref=e364] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10,20,30&shippingStatuses=20
                        - text: 1 - view all
                  - row "Total incomplete orders (pending order status) $2,570.80 3 - view all" [ref=e366]:
                    - cell "Total incomplete orders (pending order status)" [ref=e367]
                    - cell "$2,570.80" [ref=e368]
                    - cell "3 - view all" [ref=e369]:
                      - link "3 - view all" [ref=e370] [cursor=pointer]:
                        - /url: /Admin/Order/List?orderStatuses=10
                        - text: 3 - view all
              - generic:
                - generic:
                  - table
            - button [ref=e375] [cursor=pointer]
      - generic [ref=e378]:
        - generic [ref=e380]:
          - generic [ref=e381]:
            - heading "Latest Orders View All Orders" [level=3] [ref=e382]:
              - text: Latest Orders
              - link "View All Orders" [ref=e384] [cursor=pointer]:
                - /url: /Admin/Order/List
            - button [ref=e386] [cursor=pointer]
          - generic [ref=e390]:
            - generic [ref=e393]:
              - table [ref=e396]:
                - rowgroup [ref=e397]:
                  - 'row "Order # Order status Customer Created on View" [ref=e398]':
                    - 'columnheader "Order #" [ref=e399]':
                      - generic [ref=e401]: "Order #"
                    - columnheader "Order status" [ref=e402]:
                      - generic [ref=e404]: Order status
                    - columnheader "Customer" [ref=e405]:
                      - generic [ref=e407]: Customer
                    - columnheader "Created on" [ref=e408]:
                      - generic [ref=e410]: Created on
                    - columnheader "View" [ref=e411]:
                      - generic [ref=e413]: View
              - table [ref=e421]:
                - rowgroup:
                  - 'row "Order # Order status Customer Created on View"':
                    - 'columnheader "Order #"':
                      - generic [ref=e423]: "Order #"
                    - columnheader "Order status":
                      - generic [ref=e425]: Order status
                    - columnheader "Customer":
                      - generic [ref=e427]: Customer
                    - columnheader "Created on":
                      - generic [ref=e429]: Created on
                    - columnheader "View":
                      - generic [ref=e431]: View
                - rowgroup [ref=e432]:
                  - row "5 Processing Victoria Terces (victoria_victoria@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e433]:
                    - cell "5" [ref=e434]
                    - cell "Processing" [ref=e435]
                    - cell "Victoria Terces (victoria_victoria@nopCommerce.com)" [ref=e436]
                    - cell "11/04/2025 2:32:26 AM" [ref=e437]
                    - cell "View" [ref=e438]:
                      - link "View" [ref=e439] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/5
                        - text: View
                  - row "4 Pending Brenda Lindgren (brenda_lindgren@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e441]:
                    - cell "4" [ref=e442]
                    - cell "Pending" [ref=e443]
                    - cell "Brenda Lindgren (brenda_lindgren@nopCommerce.com)" [ref=e444]
                    - cell "11/04/2025 2:32:26 AM" [ref=e445]
                    - cell "View" [ref=e446]:
                      - link "View" [ref=e447] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/4
                        - text: View
                  - row "3 Pending James Pan (james_pan@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e449]:
                    - cell "3" [ref=e450]
                    - cell "Pending" [ref=e451]
                    - cell "James Pan (james_pan@nopCommerce.com)" [ref=e452]
                    - cell "11/04/2025 2:32:26 AM" [ref=e453]
                    - cell "View" [ref=e454]:
                      - link "View" [ref=e455] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/3
                        - text: View
                  - row "2 Pending Arthur Holmes (arthur_holmes@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e457]:
                    - cell "2" [ref=e458]
                    - cell "Pending" [ref=e459]
                    - cell "Arthur Holmes (arthur_holmes@nopCommerce.com)" [ref=e460]
                    - cell "11/04/2025 2:32:26 AM" [ref=e461]
                    - cell "View" [ref=e462]:
                      - link "View" [ref=e463] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/2
                        - text: View
                  - row "1 Cancelled Steve Gates (steve_gates@nopCommerce.com) 11/04/2025 2:32:26 AM View" [ref=e465]:
                    - cell "1" [ref=e466]
                    - cell "Cancelled" [ref=e467]
                    - cell "Steve Gates (steve_gates@nopCommerce.com)" [ref=e468]
                    - cell "11/04/2025 2:32:26 AM" [ref=e469]
                    - cell "View" [ref=e470]:
                      - link "View" [ref=e471] [cursor=pointer]:
                        - /url: /Admin/Order/Edit/1
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e474]:
              - navigation "pagination" [ref=e476]:
                - list [ref=e477]:
                  - listitem [ref=e478]:
                    - generic "Previous"
                  - listitem [ref=e479]:
                    - link "1" [ref=e480] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e481]:
                    - generic "Next"
              - status [ref=e482]: 1-5 of 5 items
        - generic [ref=e484]:
          - generic [ref=e485]:
            - heading "Popular search keywords" [level=3] [ref=e486]: Popular search keywords
            - button [ref=e489] [cursor=pointer]
          - generic [ref=e493]:
            - generic [ref=e496]:
              - table [ref=e499]:
                - rowgroup [ref=e500]:
                  - row "Keyword Count" [ref=e501]:
                    - columnheader "Keyword" [ref=e502]:
                      - generic [ref=e504]: Keyword
                    - columnheader "Count" [ref=e505]:
                      - generic [ref=e507]: Count
              - table [ref=e512]:
                - rowgroup:
                  - row "Keyword Count":
                    - columnheader "Keyword":
                      - generic [ref=e514]: Keyword
                    - columnheader "Count":
                      - generic [ref=e516]: Count
                - rowgroup [ref=e517]:
                  - row "computer 34" [ref=e518]:
                    - cell "computer" [ref=e519]
                    - cell "34" [ref=e520]
                  - row "camera 30" [ref=e521]:
                    - cell "camera" [ref=e522]
                    - cell "30" [ref=e523]
                  - row "jewelry 27" [ref=e524]:
                    - cell "jewelry" [ref=e525]
                    - cell "27" [ref=e526]
                  - row "shoes 26" [ref=e527]:
                    - cell "shoes" [ref=e528]
                    - cell "26" [ref=e529]
                  - row "jeans 19" [ref=e530]:
                    - cell "jeans" [ref=e531]
                    - cell "19" [ref=e532]
              - generic:
                - generic:
                  - table
            - generic [ref=e534]:
              - navigation "pagination" [ref=e536]:
                - list [ref=e537]:
                  - listitem [ref=e538]:
                    - generic "Previous"
                  - listitem [ref=e539]:
                    - link "1" [ref=e540] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e541]:
                    - link "Next" [ref=e542] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e543]: 1-5 of 6 items
      - generic [ref=e544]:
        - generic [ref=e546]:
          - generic [ref=e547]:
            - heading "Bestsellers by quantity" [level=3] [ref=e548]: Bestsellers by quantity
            - button [ref=e551] [cursor=pointer]
          - generic [ref=e555]:
            - generic [ref=e558]:
              - table [ref=e561]:
                - rowgroup [ref=e562]:
                  - row "Name Total quantity Total amount (excl tax) View" [ref=e563]:
                    - columnheader "Name" [ref=e564]:
                      - generic [ref=e566]: Name
                    - columnheader "Total quantity" [ref=e567]:
                      - generic [ref=e569]: Total quantity
                    - columnheader "Total amount (excl tax)" [ref=e570]:
                      - generic [ref=e572]: Total amount (excl tax)
                    - columnheader "View" [ref=e573]:
                      - generic [ref=e575]: View
              - table [ref=e582]:
                - rowgroup:
                  - row "Name Total quantity Total amount (excl tax) View":
                    - columnheader "Name":
                      - generic [ref=e584]: Name
                    - columnheader "Total quantity":
                      - generic [ref=e586]: Total quantity
                    - columnheader "Total amount (excl tax)":
                      - generic [ref=e588]: Total amount (excl tax)
                    - columnheader "View":
                      - generic [ref=e590]: View
                - rowgroup [ref=e591]:
                  - row "Leica T Mirrorless Digital Camera 1 $530.00 View" [ref=e592]:
                    - cell "Leica T Mirrorless Digital Camera" [ref=e593]
                    - cell "1" [ref=e594]
                    - cell "$530.00" [ref=e595]
                    - cell "View" [ref=e596]:
                      - link "View" [ref=e597] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/16
                        - text: View
                  - row "Apple iCam 1 $1,300.00 View" [ref=e599]:
                    - cell "Apple iCam" [ref=e600]
                    - cell "1" [ref=e601]
                    - cell "$1,300.00" [ref=e602]
                    - cell "View" [ref=e603]:
                      - link "View" [ref=e604] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/17
                        - text: View
                  - row "Levi's 511 Jeans 1 $43.50 View" [ref=e606]:
                    - cell "Levi's 511 Jeans" [ref=e607]
                    - cell "1" [ref=e608]
                    - cell "$43.50" [ref=e609]
                    - cell "View" [ref=e610]:
                      - link "View" [ref=e611] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/32
                        - text: View
                  - row "Fahrenheit 451 by Ray Bradbury 1 $27.00 View" [ref=e613]:
                    - cell "Fahrenheit 451 by Ray Bradbury" [ref=e614]
                    - cell "1" [ref=e615]
                    - cell "$27.00" [ref=e616]
                    - cell "View" [ref=e617]:
                      - link "View" [ref=e618] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/36
                        - text: View
                  - row "First Prize Pies 1 $51.00 View" [ref=e620]:
                    - cell "First Prize Pies" [ref=e621]
                    - cell "1" [ref=e622]
                    - cell "$51.00" [ref=e623]
                    - cell "View" [ref=e624]:
                      - link "View" [ref=e625] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/37
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e628]:
              - navigation "pagination" [ref=e630]:
                - list [ref=e631]:
                  - listitem [ref=e632]:
                    - generic "Previous"
                  - listitem [ref=e633]:
                    - link "1" [ref=e634] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e635]:
                    - link "2" [ref=e636] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e637]:
                    - link "3" [ref=e638] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e639]:
                    - link "Next" [ref=e640] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e641]: 1-5 of 12 items
        - generic [ref=e643]:
          - generic [ref=e644]:
            - heading "Bestsellers by amount" [level=3] [ref=e645]: Bestsellers by amount
            - button [ref=e648] [cursor=pointer]
          - generic [ref=e652]:
            - generic [ref=e655]:
              - table [ref=e658]:
                - rowgroup [ref=e659]:
                  - row "Name Total quantity Total amount (excl tax) View" [ref=e660]:
                    - columnheader "Name" [ref=e661]:
                      - generic [ref=e663]: Name
                    - columnheader "Total quantity" [ref=e664]:
                      - generic [ref=e666]: Total quantity
                    - columnheader "Total amount (excl tax)" [ref=e667]:
                      - generic [ref=e669]: Total amount (excl tax)
                    - columnheader "View" [ref=e670]:
                      - generic [ref=e672]: View
              - table [ref=e679]:
                - rowgroup:
                  - row "Name Total quantity Total amount (excl tax) View":
                    - columnheader "Name":
                      - generic [ref=e681]: Name
                    - columnheader "Total quantity":
                      - generic [ref=e683]: Total quantity
                    - columnheader "Total amount (excl tax)":
                      - generic [ref=e685]: Total amount (excl tax)
                    - columnheader "View":
                      - generic [ref=e687]: View
                - rowgroup [ref=e688]:
                  - row "Vintage Style Engagement Ring 1 $2,100.00 View" [ref=e689]:
                    - cell "Vintage Style Engagement Ring" [ref=e690]
                    - cell "1" [ref=e691]
                    - cell "$2,100.00" [ref=e692]
                    - cell "View" [ref=e693]:
                      - link "View" [ref=e694] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/41
                        - text: View
                  - row "Apple iCam 1 $1,300.00 View" [ref=e696]:
                    - cell "Apple iCam" [ref=e697]
                    - cell "1" [ref=e698]
                    - cell "$1,300.00" [ref=e699]
                    - cell "View" [ref=e700]:
                      - link "View" [ref=e701] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/17
                        - text: View
                  - row "Leica T Mirrorless Digital Camera 1 $530.00 View" [ref=e703]:
                    - cell "Leica T Mirrorless Digital Camera" [ref=e704]
                    - cell "1" [ref=e705]
                    - cell "$530.00" [ref=e706]
                    - cell "View" [ref=e707]:
                      - link "View" [ref=e708] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/16
                        - text: View
                  - row "Flower Girl Bracelet 1 $360.00 View" [ref=e710]:
                    - cell "Flower Girl Bracelet" [ref=e711]
                    - cell "1" [ref=e712]
                    - cell "$360.00" [ref=e713]
                    - cell "View" [ref=e714]:
                      - link "View" [ref=e715] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/40
                        - text: View
                  - row "First Prize Pies 1 $51.00 View" [ref=e717]:
                    - cell "First Prize Pies" [ref=e718]
                    - cell "1" [ref=e719]
                    - cell "$51.00" [ref=e720]
                    - cell "View" [ref=e721]:
                      - link "View" [ref=e722] [cursor=pointer]:
                        - /url: /Admin/Product/Edit/37
                        - text: View
              - generic:
                - generic:
                  - table
            - generic [ref=e725]:
              - navigation "pagination" [ref=e727]:
                - list [ref=e728]:
                  - listitem [ref=e729]:
                    - generic "Previous"
                  - listitem [ref=e730]:
                    - link "1" [ref=e731] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e732]:
                    - link "2" [ref=e733] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e734]:
                    - link "3" [ref=e735] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e736]:
                    - link "Next" [ref=e737] [cursor=pointer]:
                      - /url: "#"
              - status [ref=e738]: 1-5 of 12 items
  - generic [ref=e742]:
    - generic [ref=e743]:
      - text: Powered by
      - link "nopCommerce" [ref=e744] [cursor=pointer]:
        - /url: https://www.nopcommerce.com/?utm_source=demo-admin-panel&utm_medium=footer&utm_campaign=admin-panel
    - generic [ref=e745]: Monday, August 24, 2026 4:33 PM
    - generic [ref=e746]: nopCommerce version 4.90.4
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