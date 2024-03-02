const Condition = () => {
  return (
    <div>
      <h4 className="text" style={{ color: "#6c757c" }}>
        Requirements
      </h4>
      <div className="list-group">
        <div className="list-group-item">
          <p className="">1.) เบอร์โทรที่ไม่มี 0 นำหน้า </p>
          <ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp;ให้ขีดอยู่ที่ index 2 และ 6
              </i>
            </li>
            <ul>
              <li>&nbsp; &nbsp;ผลลัพท์ : 39-708-7700 </li>
            </ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp;ขีดต้องขึ้นมาระหว่างพิมพ์
              </i>
            </li>
            <ul>
              <li>
                &nbsp; &nbsp;เช่น มีเบอร์ 39 อยู่แล้ว และพิมพ์ 7 เพิ่ม
                ผลลัพท์ต้องเป็น 39-7
              </li>
            </ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp;เมื่อกรอกจำนวนตัวเลขมากกว่า 9 ให้เบอร์โทรไม่มีขีด
              </i>
            </li>
          </ul>
        </div>
        <div className="list-group-item">
          <p className="">2.) เบอร์โทรที่มี 0 นำหน้า </p>
          <ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp;ให้ขีดอยู่ที่ index 3 และ 7
              </i>
            </li>
            <ul>
              <li>&nbsp; &nbsp;ผลลัพท์ : 039-708-7700 </li>
            </ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp; ขีดต้องขึ้นมาระหว่างพิมพ์
              </i>
            </li>
            <ul>
              <li>
                &nbsp; &nbsp; เช่น มีเบอร์ 039 อยู่แล้ว และพิมพ์ 7 เพิ่ม
                ผลลัพท์ต้องเป็น 039-7
              </li>
            </ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp; เมื่อกรอกจำนวนตัวเลขมากกว่า 10 ให้เบอร์โทรไม่มีขีด
              </i>
            </li>
            <ul>
              <li> &nbsp; &nbsp;ผลลัพท์ : 03970877002</li>
            </ul>
          </ul>
        </div>
        <div className="list-group-item">
          <p>3.) กรณีลบเบอร์ให้ลบขีดทิ้งอัตโนมัติ</p>
          <ul>
            <li>
              <i className="bi bi-check-square-fill">
                &nbsp; &nbsp;ตัวอย่าง ต้องการลบ 7 ตำแหน่งสุดท้าย : 039-708-7
              </i>
            </li>
            <ul>
              <li> &nbsp; &nbsp;ผลลัพท์ : 039-708</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Condition;
