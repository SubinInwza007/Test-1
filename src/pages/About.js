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
          To nurture skilled professionals in information technology who can adapt to 
          the dynamic needs of the industry and contribute to societal development.
        </p>
      </section>

      {/* วิสัยทัศน์ของสาขา */}
      <section className="my-4 bg-light p-4 rounded shadow">
        <h3 className="text-success">Our Vision</h3>
        <p>
          "To be a pioneer in information technology education, fostering innovation, 
          creativity, and leadership for a sustainable future."
        </p>
      </section>
    </div>
  );
}

export default About;
