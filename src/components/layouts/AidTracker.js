import React from 'react';
import AidTrackerItem from './AidTrackerItem';
const AidTracker = () => {
  return (
    <div className='container center'>
      <h1>Thành Tựu Đạt Được</h1>
      <br />
      <div className='row'>
        <AidTrackerItem icon='build' title='Tân Trang Nhà Cửa' count='40' />
        <AidTrackerItem icon='school' title='Xây Dựng Trường Học' count='70' />
        <AidTrackerItem icon='people' title='Đưa Em Đến Trường' count='500' />
        <AidTrackerItem icon='fingerprint' title='Giúp Đỡ Gia Đình Khó Khăn' count='1000' />
      </div>
      <div className='row'>
        <h6>Cập Nhật Lúc 10AM Hôm Nay | Từ Tháng 8/2017</h6>
      </div>
    </div>
  );
};

export default AidTracker;
