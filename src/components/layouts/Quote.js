import React from 'react';
import QuoteItem from './QuoteItem';

const Quote = () => {
  return (
    <div className='container center'>
      <h1 className='center'>Hiện Trạng</h1>
      <br />
      <QuoteItem red='11.5% người' text=' không có nhà vệ sinh để dùng.' />
      <QuoteItem red='79 triệu người' text=' phải đi vệ sinh  ngoài trời.' />
      <QuoteItem
        red='45% trẻ em'
        text=' bị suy dinh dưỡng.'
      />
      <QuoteItem
        red='22 triệu người'
        text=' không được sử dụng nguồn nước sạch gần nhà.'
      />
      <QuoteItem
        red='18% người dân miền trung'
        text=' bị mất nhà cửa sau lũ lụt triền miên.'
      />
      <QuoteItem
        red='19,500 trẻ em'
        text=' không được cắp sách đến trường do điều kiện kinh tế.'
      />
    </div>
  );
};

export default Quote;
