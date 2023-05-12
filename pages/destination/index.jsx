import PrimaryBtn from "@/components/buttons/primaryBtn";
import { PrimaryHeading } from "@/components/destination";
import { OtherCardHeading } from "@/components/other_package";
import PackageSlider from "@/components/package_slider";
import React from "react";

const Index = () => {
  return (
    <div>
      <div className="max-w-[90rem] w-[80%] mx-auto">
        <PrimaryHeading name="Our destination" />
        <div className="flex flex-col  my-10 ">
          {[1, 2, 3, 4].map((data, i) => {
            return (
              <div
                className="w-[100%] h-[18rem] flex border-2 border-black my-4 rounded-xl shadow-xl"
                key={i}
                // data-aos="fade-right"
              >
                <img
                  src="https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt=""
                  className="w-[25%] h-[100%] rounded-tl-[inherit] rounded-bl-[inherit]"
                />
                <div className="ml-6 mt-2 w-[75%] text-left pr-8">
                  <OtherCardHeading name="nepal" color="rgb(244 122 48)" />
                  <p className="my-6 h-[8rem] overflow-hidden text-lg tracking-wider">
                    Lorem ipsum dolor sit \ . , , maxime recusandae soluta harum
                    esse, error aliquam . Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Enim hic aperiam sint
                    similique culpa. In minima ea laboriosam. Minus dignissimos
                    aliquam fugiat quibusdam impedit quo ad, cupiditate eveniet
                    quidem et inventore dolores blanditiis maiores. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Recusandae ab
                    reiciendis veritatis consectetur illo voluptatibus
                    temporibus excepturi id tempora dolore libero vero maiores
                    cupiditate dolorem maxime fuga non error enim, repellendus
                    molestias rerum. Natus labore veniam ducimus ut neque
                    reprehenderit, odio amet animi quidem explicabo libero,
                    nulla sed tempora maxime non error quia delectus soluta
                    voluptas possimus quos necessitatibus vel sequi! Harum
                    beatae, accusantium blanditiis voluptas, rerum nemo odio
                    repellat in dolorem consectetur repellendus. Reprehenderit
                    est unde porro repellendus
                  </p>
                  <PrimaryBtn name="Know More" link="/destination/fadsf" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PackageSlider />
    </div>
  );
};

export default Index;
