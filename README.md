# sap-app

## AppController

- Method `onInit()` : khởi tạo
  - Khởi tạo mảng lọc `searchFilters`, `tabFilters` = [];
  - Tạo một model JSON cho view với hai thuộc tính 'view'(tên của model) và new JSONModel
- Method `AddTodo()` : Thêm phần từ mới vào todo
  - B1 lấy model hiện tại
  - Dùng `getProperty` để truy nhập vào đường dẫn "todos" để lấy danh sách todos hiện tại
  - Dùng map tạo 1 bản sao cho từng todo tránh thay đổi trực tiếp vào mảng ban đầu
  - Dùng `getProperty` theo đường dẫn "newTodo"
  - Dùng push để thêm các phần tử mới vào todos
  - Update modle mới sử dụng `setProperty` với đường dẫn "todos" và mảng todos
  - Refresh ô input bằng chuỗi trống vào có đường dẫn đến "newTodo"
- Method `clearCompleted` : Xoá các todo đã hoàn thành
  - Dùng getModel để lấy model hiện tại
  - Tạo 1 bản sao của danh sách todos
  - Duyệt ngược mảng sử dụng `while` để xoá những phần tử đã hoàn thành
  - Update lại model với danh sách todos mới
- Method `updateItemsLeftCount` :Update só lượng todos chưa hoàn thành
  - Lấy model hiện tại
  - Lấy danh sách todo theo đường dẫn "todos" , mặc định mảng todo là rỗng
  - Dùng hàm `filter` để lọc những todos chưa hoàn thành
  - Dùng setProperty theo đường dẫn "itemLeftCount" và mảng `itemLeft` để update lại model
- Method `onSearch`: Xử lý tìm kiếm
  - Lấy model hiện tại
  - Dùng getSource để lấy đối tượng kích hoạt, rồi sử dụng getValue để lấy giá trị nhập vào input
  - Đặt lại mảng searchFiler là mảng rỗng
  - Kiểm tra giá trị input lớn hơn 0 ,thì mình sẽ vô hiệu hoá chức năng xoá items, set nó thành `false`
    - Tạo 1 bộ lọc theo keys:`title`, `FilterOperator.Contains` có chưa nó, key nhập vào input
    - Sau khi lọc các items sẽ push vào mảng searchFilters
  - Trường hợp k có từ khoá tìm kiếm
    - set cho phép xóa item
- Method `onFilter()`: Lọc todo theo trạng thái

  - Sử dụng getParameter để truy cập vào phần tử `item`
  - Nếu không nút Item sẽ hiện gì
  - Dùng `getKey` để lấy giá trị của thuộc tính `key` trong nút đó
  - Đặt lại mảng bộ lọc tabFilter là mảng rỗng
  - Sử dụng `switch case` để lọc cho todos đã hoàn thành và chưa hoàn thành
    - Nếu chưa hoàn thành khởi tạo new Filter ("completed", FilterOperator.EQ, false) rồi push nó vào mảng tabFilter
    - Nếu đã hoàn thành Nếu chưa hoàn thành khởi tạo new Filter ("completed", FilterOperator.EQ, true) rồi push vào mảng tabFilter
    - case 'all': Hiện tất cả todos
  - Sau đó gọi hàm `_applyListFilters()`

- method `_applyListFilters()`: Áp dụng các bộ lọc
  - Sử dụng `byId` lấy danh sách todo từ view
  -

## BaseController :

- method `getModel`: sử dụng hàm `getView` cầu nối giữa controller và View truy xuất thao tác với View hoặc các component trong view. sử dụng `getModel` để lấy dữ liệu từ `todoitems.json` để liên kết với View.

- method `setModel`: sử dụng hàm `getView` cầu nối giữa controller và View truy xuất thao tác với View hoặc các component trong view. sử dụng `setModel` gán (hoặc liên kết) một mô hình dữ liệu (Model) với View, Controller, hoặc một phần tử giao diện (UI Element)

## Câu hỏi

Đoạn này hơi khó hiểu. tạm hiểu là nó lọc theo cả tab và search , mong menter giải thích thêm ạ

```ts
// Lấy binding của danh sách
const binding = list.getBinding("items") as ListBinding;
// Áp dụng các bộ lọc (kết hợp bộ lọc tìm kiếm và bộ lọc tab)
binding.filter(
  this.searchFilters.concat(this.tabFilters),
  "todos" as FilterType
);
```
