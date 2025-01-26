# Final Project | RESTful API, Mock API, JSON web token

### RESTful API: คำอธิบายและการทำงาน
RESTful API (Representational State Transfer API) เป็นมาตรฐานที่ใช้สำหรับการแลกเปลี่ยนข้อมูลระหว่าง Client (เช่น เว็บเบราว์เซอร์หรือแอปพลิเคชัน) และ Server ผ่านโปรโตคอล HTTP โดยยึดหลักการที่ออกแบบให้ระบบทำงานอย่างยืดหยุ่น เข้าใจง่าย และทำงานร่วมกันได้ดี
RESTful API ออกแบบมาเพื่อให้การสื่อสารมีความยืดหยุ่น เข้าใจง่าย และสามารถทำงานร่วมกันได้ดี โดยใช้แนวคิดพื้นฐานดังนี้ :

- Resources: ทุกอย่างในระบบถูกมองว่าเป็น "ทรัพยากร" เช่น ผู้ใช้ (Users), สินค้า (Products), หรือคำสั่งซื้อ (Orders)
- URI (Uniform Resource Identifier): ใช้ในการระบุทรัพยากร เช่น https://example.com/users เพื่อเข้าถึงรายการผู้ใช้
- HTTP Methods: การกระทำที่สามารถทำกับทรัพยากร เช่น
- GET: อ่านข้อมูล
- POST: สร้างข้อมูลใหม่
- PUT/PATCH: อัปเดตข้อมูล
- DELETE: ลบข้อมูล
> Stateless: ไม่มีการเก็บสถานะของการร้องขอ (Request) ใด ๆ ในฝั่งเซิร์ฟเวอร์ แต่ละคำขอเป็นอิสระต่อกัน
> JSON/HTML/XML: รูปแบบข้อมูลที่ใช้แลกเปลี่ยนระหว่าง Client และ Server โดย JSON เป็นที่นิยมที่สุด

### การทำงานของ RESTful API

- 1.Client ส่งคำขอ (Request) :
```http
GET /users HTTP/1.1
Host: api.example.com
```
- 2.Server ตอบกลับ (Response) :
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    }
]
```

# MockAPI คืออะไร?
MockAPI เป็นเครื่องมือออนไลน์ที่ใช้จำลอง RESTful API สำหรับการพัฒนาและทดสอบระบบ โดยไม่จำเป็นต้องสร้างเซิร์ฟเวอร์จริง

### คุณสมบัติเด่นของ MockAPI
- ใช้งานง่ายผ่าน Dashboard
- รองรับ HTTP Methods พื้นฐาน (GET, POST, PUT, DELETE)
- จำลองข้อมูลผ่าน JSON Schema
- ใช้ URL Mock สำหรับเชื่อมต่อกับ Frontend/Backend

### วิธีใช้งาน MockAPI
1.สมัครสมาชิก: MockAPI
2.สร้างโปรเจกต์: ตั้งชื่อและกำหนดโครงสร้างทรัพยากร เช่น users, products
3.เพิ่ม Schema:
#### ตัวอย่างโครงสร้าง users :
```json
{
    "id": "autoincrement",
    "name": "name",
    "email": "email",
    "password": "string"
}
```
#### เรียกใช้งาน API:
- MockAPI จะสร้าง URL ให้ เช่น :
```Arduino
https://mockapi.io/users
```
