import React from 'react'

const Single = () => {
  return (
    <div><div className="w-[385px] mx-[25px] mb-[40px] flex flex-col">
    <img
      className="w-[385px] h-[280px] object-cover rounded-[7px]"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <div className="flex flex-col items-center">
      <div className="flex">
        <span className="font-[400] text-[11px] text-[#be9656] mt-[15px] mr-[10px] cursor-pointer">Music</span>
        <span className="font-[400] text-[11px] text-[#be9656] mt-[15px] cursor-pointer">Life</span>
      </div>
      <span className="font-[900] text-[24px] mt-[15px] cursor-pointer">Lorem ipsum dolor sit amet.</span>
      <hr />
      <span className="font-serif italic text-[13px] font-[400] text-[#999999] mt-[15px]">1 hour ago</span>
    </div>
    <p className="font-[400] text-[14px] leading-[24px] text-[#444444] mt-[15px] overflow-hidden text-ellipsis display[-webkit-box] -webkit-line-clamp-[4] -webkit-box-orient-[vertical]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus laudantium voluptatum necessitatibus velit, eos deserunt ab iure. Cupiditate aliquam voluptatum nostrum obcaecati autem iste aliquid aperiam adipisci voluptate voluptatem! kiren Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt molestias repellendus necessitatibus esse harum nobis sunt veritatis sequi consequatur voluptatum fugit minima laboriosam, eveniet magni ut dolorem! Alias, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat asperiores quaerat quas voluptatibus consectetur maiores nemo quod, aut ratione maxime facilis vero sed illo odit? Cumque veritatis quaerat esse!
      Facere quo sit nobis non eveniet explicabo ad velit, laudantium qui! Iure, corporis corrupti sed nemo accusantium ab harum modi ad, debitis maxime, praesentium saepe impedit architecto iste facilis cumque.
      Tempora eum aspernatur enim rem dolore, explicabo molestiae, doloremque harum nisi totam, porro dolorum assumenda sit sunt. Asperiores rem, non quia vel inventore nesciunt incidunt eaque atque minima pariatur facere.
    </p>
  </div></div>
  )
}

export default Single


