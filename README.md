# TODO API với curl và jq

## LIST TẤT CẢ TODO

```bash
curl -s http://localhost:3000/api/v1/todos | jq
```

- `curl`: chương trình dòng lệnh để gửi HTTP request  
- `-s`: `--silent` — tắt progress bar và thông báo lỗi ngắn; chỉ in nội dung response, tiện để pipeline sang công cụ khác  
- URL đích: `http://localhost:3000/api/v1/todos`  
- `jq`: pipeline output sang jq để pretty-print JSON  

---

## TẠO TODO MỚI (POST)

```bash
curl -s -X POST http://localhost:3000/api/v1/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Write docs"}' | jq
```

- `-s`: silent  
- `-X POST`: đặt HTTP method là POST (nếu có `-d` thì curl mặc định cũng dùng POST, ở đây ghi để minh bạch)  
- `-H "Content-Type: application/json"`: thêm HTTP header, vì server dùng `app.use(express.json)`  
- `-d '{"title":"Write docs"}'`: request body gửi lên server  
- `| jq`: hiển thị JSON đẹp  

---

## LẤY 1 TODO THEO ID (GET /:id)

```bash
curl -s http://localhost:3000/api/v1/todos/1 | jq
```

- Path động `/:id` được điền bằng `1`  
- Server đọc `req.params.id` → ép kiểu số `Number(req.params.id)` → `db.get(1)`  

---

## CẬP NHẬT MỘT PHẦN (PATCH)

```bash
curl -s -X PATCH http://localhost:3000/api/v1/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"done": true}' | jq
```

- `-X PATCH`: HTTP PATCH dùng để cập nhật một phần tài nguyên  

---

## XOÁ (DELETE)

```bash
curl -s -X DELETE http://localhost:3000/api/v1/todos/1
```
