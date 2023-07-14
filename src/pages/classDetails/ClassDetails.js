import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ClassDetails = (props) => {
  const params = useParams();
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/comments/${params.classId}`
      );

      setUsers(res.data);
    }
    fetchData();
  }, []);
  return (
    <section className="classDetails">
      <div className="classDetails__content">
        <div className="classDetails__content--heading">
          <div className="classDetails__content--heading--title">
            <h> Graphic Design</h>
          </div>
          <h4 className=" classDetails__content--heading--head">
            Essential Beginners UX/UI Core Course For You 2023
          </h4>
          <p className="classDetails__content--heading--para">
            Design tutorial will help you learn quickly and thoroughly orem
            ipsumor lipsum as it is sometime
          </p>
        </div>
        <div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">
              Course Information
            </h2>
            <span></span>
            <p className="classDetails__content__card--para">
              This tutorial will help you learn quickly and thoroughly. Lorem
              ipsum, or lipsum as it is sometimes known, iaws dumm text used in
              laying out print, graphic or web designs. Lorem ipsum dolor sit
              amet, consectetuer adipiscingawr elit onec odio. Quisque volutpat
              mattis eros. You’ll be exposed to principles and strategies, but,
              more importantly, you’ll learn how to actually apply these
              abstract concepts by coding three different websites for three
              very different audiences. Lorem ipsum is dummy text used in laying
              out print, graphic or web designs Lorem ipsum
            </p>
          </div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">
              What Will You Learn?
            </h2>
            <span></span>
            <p className="classDetails__content__card--para">
              This tutorial will help you learn quickly and thoroughly. Lorem
              ipsum, or lipsum as it is sometimes known, iaws dumm text used in
              laying out print, graphic or web designsm dolor sit amet.{" "}
              <ul>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
              </ul>
            </p>
          </div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">Requirements</h2>
            <span></span>
            <p className="classDetails__content__card--para">
              This tutorial will help you learn quickly and thoroughly. Lorem
              ipsum, or lipsum as it is sometimes Become a UX designer. Create
              quick wireframes. You will be able to add UX designe Downloadable
              exercise files Become a UI designer.
              <ul>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
    //   <div style={{ width: "80%", margin: "0 auto" }}>
    //     {/* <div
    //       style={{
    //         margin: "20px",
    //         marginRight: "auto",
    //         borderRadius: "20px",
    //         border: "2px solid #000",
    //         width: "50%",
    //         padding: "10px",
    //       }}
    //     >
    //       <h1>Post Id : {users.postId ? users.postId : "Loading . . . . "}</h1>
    //     </div>
    //     <div
    //       style={{
    //         margin: "20px",
    //         marginLeft: "auto",
    //         border: "2px solid #000",
    //         borderRadius: "20px",
    //         width: "50%",
    //         padding: "10px",
    //       }}
    //     >
    //       <h1>Unique Id : {users.id ? users.id : "Loading . . . ."}</h1>
    //     </div> */}

    //     <div
    //       style={{
    //         margin: "20px",
    //         margint: "auto",
    //         border: "2px solid #000",
    //         borderRadius: "20px",
    //         width: "50%",
    //         padding: "10px",
    //       }}
    //     >
    //       <h2> {users.name ? users.name : "Loading . . . ."}</h2>
    //     </div>
    //     <div
    //       style={{
    //         margin: "20px",
    //         marginLeft: "auto",
    //         border: "2px solid #000",
    //         borderRadius: "20px",
    //         width: "50%",
    //         padding: "10px",
    //       }}
    //     >
    //       <h2>Title : {users.name ? users.name : "Loading . . . ."}</h2>
    //     </div>
    //     <div
    //       style={{
    //         margin: "20px",
    //         marginRight: "auto",
    //         border: "2px solid #000",
    //         borderRadius: "20px",
    //         width: "50%",
    //         padding: "10px",
    //       }}
    //     >
    //       <h2>Body : {users.body ? users.body : "Loading . . . ."}</h2>
    //     </div>
    //   </div>
  );
};

export default ClassDetails;
