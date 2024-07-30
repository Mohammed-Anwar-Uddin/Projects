import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from "../components/SideBar";

function SingelBlog() {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl px-5 mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="md:w-4/5">
          <img src={image} alt="" className="w-full mx-auto rounded" />

          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2 " /> {author} |{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2 " />{" "}
            {reading_time}
          </p>
          <p className="mb-3 text-gray-600">{content}</p>

          <p className="mb-3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            pariatur optio error ipsam laudantium consectetur expedita.
            Voluptatibus necessitatibus illo a doloribus nulla natus
            consequuntur suscipit cupiditate, quibusdam possimus, sapiente
            voluptatum exercitationem explicabo vitae. Fuga placeat ratione id
            earum fugiat maiores, repudiandae libero! Esse architecto quibusdam
            aliquid quas neque quam nemo! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quisquam eos nemo itaque quae
            inventore necessitatibus molestiae doloremque dolorem quam excepturi
            iure tempora cumque consequuntur pariatur, sint rerum tenetur id
            repellat odio omnis fugit. Sunt cumque ab alias aperiam facere
            natus?
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              aliquam quis? Nulla neque totam accusantium magni eligendi,
              perferendis ratione modi?
            </p>
            <br />
            <p className="mb-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia,
              dolorem, repellendus reiciendis maiores eius consequatur,
              excepturi labore quaerat corrupti temporibus commodi atque facere!
              Repellat, quibusdam aperiam blanditiis ab quod nesciunt amet
              libero illum voluptatibus dignissimos quasi consectetur earum,
              molestiae voluptates magni voluptas impedit, in aliquid distinctio
              molestias tempore enim dolorem ipsa unde? Nulla delectus placeat
              fuga error officiis! Doloribus, aspernatur aut amet ex aliquam
              tempora officia cupiditate illum labore. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Beatae voluptatibus odio esse,
              eum saepe suscipit quia laboriosam mollitia similique dignissimos
              officiis id ea quam perspiciatis praesentium corrupti et, illo at
              iure. Alias accusamus nostrum laudantium vero delectus, fugit iste
              corporis omnis optio veniam ab harum recusandae, nesciunt
              repudiandae cum iusto.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda id repudiandae officiis cumque, autem veritatis sit
              perferendis necessitatibus dolore mollitia cupiditate non ab
              eveniet excepturi doloremque optio consequatur deleniti minima
              laborum laudantium. Dolore autem asperiores doloremque fugit alias
              voluptatem eum at voluptate impedit consequatur, voluptas nobis,
              provident architecto? Ab amet, commodi accusamus minus sequi
              voluptates necessitatibus rem recusandae hic suscipit! <br />
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              est itaque doloremque minus quis quibusdam sint eaque, labore a,
              facilis ea, temporibus eveniet. Cumque sit commodi iste, velit aut
              qui incidunt laborum vero aliquid dolore repellendus accusamus
              reiciendis nostrum ullam, odio quae quia a sint soluta doloremque?
              Reprehenderit laborum dolorum necessitatibus consequuntur placeat
              sapiente iusto, accusantium itaque amet optio, nulla officiis in
              eum culpa esse mollitia delectus aliquam quod neque fugit.
              Voluptates quia ipsam quaerat voluptate assumenda nihil nulla vel
              animi! Ipsum, porro placeat, error, doloribus quasi est impedit
              adipisci explicabo similique fugiat fuga illo ad corporis vel quo
              tempore!
            </p>
          </p>
        </div>

        {/* sidebar */}

        <div className="sm:w-full md:w-1/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default SingelBlog;
