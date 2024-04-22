import { getAllProducts } from '../../apiServices'
import React, { useEffect, useState } from 'react'
export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#E5F3FE',
    accentRed: '#FB5D2E',
    accentPink: '#F96165',
  };

export const Categories = [
    {
        id: '1', category: 'jean', products: [
            { id: '11', name: 'Quần jean demin phong cách', price: '200.000đ', image: require('../assets/images/quần jean/demin.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải demin cao cấp',
                'Mô tả : Co giãn tốt , vải không bị xù khi giặt'
            ] },
            { id: '12', name: 'Quần jean jocker dáng năng động', price: '300.000đ', image: require('../assets/images/quần jean/jean jocker.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : Co giãn tốt , vải không bị xù khi giặt, phù hợp với mọi người , nhiều lứa tuổi'
            ] },
            { id: '13', name: 'Quần jean ngắn phong cách retro', price: '400.000đ', image: require('../assets/images/quần jean/jean ngắn 2.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : chất quần jean dày dặn , vải không bị xù khi giặt,xu hướng phong cách retro'
            ] },
            { id: '14', name: 'Quần jean ngắn màu đen', price: '300.000đ', image: require('../assets/images/quần jean/jean ngắn.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : chất quần jean dày dặn , vải không bị xù khi giặt, năng động , trẻ trung , dễ phối đồ'
            ] },
            { id: '15', name: 'Quần jean ống rộng', price: '200.000đ', image: require('../assets/images/quần jean/jean ống rộng.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : chất quần jean dày dặn , vải không bị xù khi giặt, thiết kế ống rộng dễ phối đồ phù hợp với nhiều phong cách '
            ] },
            { id: '16', name: 'Quần jean phong cách retro', price: '300.000đ', image: require('../assets/images/quần jean/jean retro.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : chất quần jean dày dặn , vải không bị xù khi giặt,xu hướng retro hoài niệm, cực kì phong cách '
            ] },
            { id: '17', name: 'Quần skiny jean màu đen', price: '150.000đ', image: require('../assets/images/quần jean/skinny jean.png'),
            describe: [
                'Thương hiệu: newseven',
                'Nơi sản xuất: Việt Nam',
                'Chất liệu : Vải jean cao cấp',
                'Mô tả : Chất vải mềm mịn như cách bạn chơi bi-a vậy nó phải mềm và mịn'
            ] }

        ]
    },
    {
        id: '2', category: 'áo phông', products: [
            { id: '21', name: 'Áo phông dành cho boy phố', price: '1.000.000đ', image: require('../assets/images/áo phông/boi phố.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn như cách bạn chơi bi-a vậy nó phải mềm và mịn'
            ], },
            { id: '22', name: 'Áo phông có cổ phối đen trắng', price: '150.000đ', image: require('../assets/images/áo phông/phông 1.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], },
            { id: '23', name: 'Áo phông Dolce and Banana', price: '300.000', image: require('../assets/images/áo phông/phông 2.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], },
            { id: '24', name: 'Áo phông Christian Dior', price: '200.000đ', image: require('../assets/images/áo phông/phông 3.png') ,
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], },

            { id: '25', name: 'Áo phông đại bàng', price: '200.200đ', image: require('../assets/images/áo phông/phông 4.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], },
            { id: '26', name: 'Áo phông Walkup màu nâu', price: '200.200đ', image: require('../assets/images/áo phông/phông nâu.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], },
            { id: '27', name: 'Áo phông có cổ phối xám đen ', price: '200.200đ', image: require('../assets/images/áo phông/phông xám.png'),
            describe: [
                'Thương hiệu: Kstore',
                'Nơi sản xuất: VIệt Nam',
                'Chất liệu : Vải cotton cao cấp',
                'Mô tả : Chất vải mềm mịn thoáng mát , hút mồ hôi , phù hợp nhiều phong cách từ trẻ trung đến lịch sự'
            ], }
        
        ]
    },
    {
        id: '3', category: 'hoodie', products: [
            { id: '31', name: 'Áo hoodie nỉ đen dày dặn', price: '300.000đ', image: require('../assets/images/hoodie/đen.png') },
            { id: '32', name: 'Áo hoodie hồng dễ thương', price: '200.000đ', image: require('../assets/images/hoodie/hoodie hồng.png') },
            { id: '33', name: 'Áo hoodie xám phong cách retro', price: '540.000đ', image: require('../assets/images/hoodie/hoodie retro.png') },
            { id: '34', name: 'Áo hoodie xám basic', price: '250.000đ', image: require('../assets/images/hoodie/hoodie xám.png') },
            { id: '35', name: 'Áo hoodie xanh in chữ', price: '200.000đ', image: require('../assets/images/hoodie/hoodie xanh.png') },
            { id: '36', name: 'Áo hoodie nâu basic', price: '540.000đ', image: require('../assets/images/hoodie/nâu.png') },
            { id: '37', name: 'Áo hoodie xanh basic', price: '250.000đ', image: require('../assets/images/hoodie/xanh.png') }
        ]
    },
    {
        id: '4', category: 'Áo sơ mi', products: [
            { id: '41', name: 'Áo sơ mi Cuban shirt', price: '300.000đ', image: require('../assets/images/sơ mi/cuban.png') },
            { id: '42', name: 'Áo flanel họa tiết caro', price: '200.000đ', image: require('../assets/images/sơ mi/flanel.png') },
            { id: '43', name: 'Áo sơ mi phối màu hồng trắng', price: '540.000đ', image: require('../assets/images/sơ mi/hồng.png') },
            { id: '44', name: 'Áo sơ mi cộc tay màu kem', price: '250.000đ', image: require('../assets/images/sơ mi/ngắn tay.png') },
            { id: '45', name: 'Áo sơ mi cộc tay họa tiết sọc xám ', price: '200.000đ', image: require('../assets/images/sơ mi/ngắn xám.png') },
            { id: '46', name: 'Áo sơ mi phối chữ trigger', price: '540.000đ', image: require('../assets/images/sơ mi/triger.png') },
            { id: '47', name: 'Áo sơ mi xám dài tay basic', price: '250.000đ', image: require('../assets/images/sơ mi/xám.png') }
        ]
    }
]