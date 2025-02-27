import React from 'react';

const Courses = () => (
  <div className="container">
    <h1>หลักสูตร</h1>
    <ul>
      <li>ปวช - ปวส. สาขางานยานยนต์ (Au)</li>
      <li>ปวช - ปวส. สาขาช่างไฟฟ้ากำลัง (Ep)</li>
      <li>ปวช - ปวส. สาขาช่างก่อสร้าง (Co)</li>
      <li>ปวช - ปวส. สาขาเทคโนโลยีสารสนเทศ (It)</li>
      <li>ปวช - ปวส. สาขาการตลาด (Mk)</li>
      <li>ปวช - ปวส. สาขาการท่องเที่ยว (Tg)</li>
      <li>ปวช - ปวส. สาขายานยนต์ไฟฟ้า (Ev)</li>
      <li>ปวช - ปวส. สาขาช่างอิเล็กทรอนิกส์ (El)</li>
      <li>ปวช - ปวส. สาขาสถาปัตยกรรม (Ar)</li>
      <li>ปวช - ปวส. สาขาการบัญชี (Ac)</li>
      <li>ปวช - ปวส. สาขาธุรกิจดิจิทัล (Dt)</li>
      <li>ปวช - ปวส. สาขาการโรงแรม (Hm)</li>
    </ul>
    {/* เพิ่มเมนูรูปภาพสำหรับแต่ละสาขา */}
    <div className="menu">
      <h2>สาขา</h2>
      <div className="menu-item">
        <a href="/react">
          <img
            src="/image/4.jpg" 
            alt="สาขางานยานยนต์ (Au)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขางานยานยนต์ (Au)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/marketing">
          <img
            src="/image/5.jpg" 
            alt="สาขาช่างไฟฟ้ากำลัง (Ep)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาช่างไฟฟ้ากำลัง (Ep)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/accounting">
          <img
            src="/image/6.jpg" 
            alt="สาขาช่างก่อสร้าง (Co)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาช่างก่อสร้าง (Co)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/7.jpg" 
            alt="สาขาเทคโนโลยีสารสนเทศ (It)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาเทคโนโลยีสารสนเทศ (It)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/8.jpg" 
            alt="สาขาการตลาด (Mk)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาการตลาด (Mk)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/9.jpg" 
            alt="สาขาการท่องเที่ยว (Tg)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาการท่องเที่ยว (Tg)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/10.jpg" 
            alt="สาขาเทคโนโลยีสารสนเทศ (It)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขายานยนต์ไฟฟ้า (Ev)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/11.jpg" 
            alt="สาขาช่างอิเล็กทรอนิกส์ (El)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาช่างอิเล็กทรอนิกส์ (El)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/12.jpg" 
            alt="สาขาสถาปัตยกรรม (Ar)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาสถาปัตยกรรม (Ar)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/13.jpg" 
            alt="สาขาการบัญชี (Ac)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาการบัญชี (Ac)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/14.jpg" 
            alt="สาขาธุรกิจดิจิทัล (Dt)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาธุรกิจดิจิทัล (Dt)</p>
        </a>
      </div>
      <div className="menu-item">
        <a href="/business-management">
          <img
            src="/image/15.jpg" 
            alt="สาขาการโรงแรม (Hm)"
            style={{ width: '510px', height: '350px' }}
          />
          <p>สาขาการโรงแรม (Hm)</p>
        </a>
      </div>
    </div>
  </div>
);

export default Courses;
