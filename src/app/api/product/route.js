const { NextRequest, NextResponse } = require("next/server");

const data = [
    {
        id: 1,
        title: "Nike Air Max Dn",
        price: 2379000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68326c8e-9fc6-4c5d-9ea2-44421bff4d25/air-max-dn-shoes-drXjb8.png"
    },
    {
        id: 2,
        title: "Nike Calm",
        price: 689000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c91f3671-ea2e-4816-b499-d955a6166bc4/calm-slides-T7qMVF.png"
    },
    {
        id: 3,
        title: "Nike Zoom Vomero 5",
        price: 2489000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d2fe356-f212-4c5b-865a-4e3409effdaf/zoom-vomero-5-shoes-Nsdqwd.png"
    },
];

export async function GET(request) {
  const  { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
        return NextResponse.json({
            status: 200,
            message: "Success",
            data: detailProduct
        });
    }
    return NextResponse.json({
        status: 400,
        message: "Not Found",
        data: {}
    });
  }

  return NextResponse.json({ status: 200, message: "Success", data});
}