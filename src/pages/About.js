import React from 'react';

function About() {
  return (
    <div className="container text-center my-5">
      {/* หัวข้อ */}
      <h1>About Us</h1>

      {/* แนะนำวิทยาลัย */}
      <section className="my-4">
        <h2 className="text-primary">เเนะนำวิทยาลัยโปลิเทคนิคลานนาเชียงใหม่</h2>
        <p className="text-muted">
        วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ (Lanna Polytechnic ChiangMai) ตั้งอยู่เลขที่ 2 ถนนสุขเกษม ตำบล ป่าตัน อำเภอ เมือง จังหวัด เชียงใหม่ ได้รับอนุญาตให้ดำเนินการจากกระทรวงศึกษาธิการ ตั้งแต่ วันที่ 18 ธันวาคม 2521 เป็นต้นมา มีวัตถุประสงค์เพื่อส่งเสริมการศึกษา ด้านวิชาชีพแก่เยาวชนชาวเชียงใหม่ และเยาวชนทั่วไป โดยเฉพาะในภาคเหนือได้มีโอกาสศึกษาในสาขาวิชาช่างอุตสาหกรรม ในระดับมาตรฐานทัดเทียมกับสถาบันชั้นนำของประเทศ เมื่อแรกเริ่มวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา มีอาคารทิพยมณฑล เป็นอาคารเรียน 1 หลัง มีจำนวนนักศึกษา 350 คน ในเนื้อที่ 10 ไร่ ทำการสอนในหลักสูตรสถาบันเทคโนโลยีราชมงคล ระดับประกาศนียบัตรวิชาชีพ(ปวช.) 3 แผนก คือ แผนกช่างยนต์ แผนกช่างไฟฟ้า และแผนกพณิชยการ
        </p>
      </section>

      {/* เป้าหมายของสาขา */}
      <section className="my-4 bg-light p-4 rounded shadow">
        <h3 className="text-success">Our Goals</h3>
        <p>
        เพื่อปลูกฝังผู้ประกอบวิชาชีพด้านเทคโนโลยีสารสนเทศที่สามารถปรับตัวได้ 
          ความต้องการแบบไดนามิกของอุตสาหกรรมและมีส่วนช่วยในการพัฒนาสังคม
        </p>
      </section>

      {/* วิสัยทัศน์ของสาขา */}
      <section className="my-4 bg-light p-4 rounded shadow">
        <h3 className="text-success">Our Vision</h3>
        <p>
          "เป็นผู้บุกเบิกการศึกษาด้านเทคโนโลยีสารสนเทศ ส่งเสริมนวัตกรรม 
          ความคิดสร้างสรรค์และความเป็นผู้นำเพื่ออนาคตที่ยั่งยืน"
        </p>
      </section>
    </div>
  );
}

export default About;
