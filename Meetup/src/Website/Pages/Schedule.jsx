import React, { useEffect } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import $ from "jquery";

function Schedule() {
    useEffect(() => {
        $(".set-bg").each(function () {
            const bg = $(this).attr("data-setbg");
            $(this).css("background-image", `url(${bg})`);
        });
    }, []);
    return (
        <div>
            <Header />
            <div>
                {/* Breadcrumb Section Begin */}
                <section className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-text">
                                    <h2>Event Schedule</h2>
                                    <div className="bt-option">
                                        <a href="#">Home</a>
                                        <span>Our Schedule</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Breadcrumb Section End */}
                {/* Schedule Table Section Begin */}
                <section className="schedule-table-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="schedule-table-tab">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Marketing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Business</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Technology</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Experience</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Event</a>
                                        </li>
                                    </ul>{/* Tab panes */}
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div className="schedule-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>
                                                                <strong>Day 1</strong>
                                                                <span>May 09, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 2</strong>
                                                                <span>May 11, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 3</strong>
                                                                <span>May 12, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 4</strong>
                                                                <span>May 14, 2019</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="event-time">10:00</td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">11:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Talking To Life</h5>
                                                                <p><span>By</span> John Smith</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Delia Mullins</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Introduce Technology</h5>
                                                                <p><span>By</span> Bryan Clark</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Marketing Design</h5>
                                                                <p><span>By</span> Ida Manning</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">13:30</td>
                                                            <td className="hover-bg">
                                                                <h5>Meet Up Marketing</h5>
                                                                <p><span>By</span> Mc Cage</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Conect People</h5>
                                                                <p><span>By</span> James Colon</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Maximize CEO</h5>
                                                                <p><span>By</span> Elmer Dunn</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Martha Fuller</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">18:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Technology Future</h5>
                                                                <p><span>By</span> Thomas Munoz</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Mattie Hanson</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Camping</h5>
                                                                <p><span>By</span> Rachel Arnold</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Leonard Daniels</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                                            <div className="schedule-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>
                                                                <strong>Day 1</strong>
                                                                <span>May 09, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 2</strong>
                                                                <span>May 11, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 3</strong>
                                                                <span>May 12, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 4</strong>
                                                                <span>May 14, 2019</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="event-time">15:00</td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">16:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Talking To Life</h5>
                                                                <p><span>By</span> John Smith</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Delia Mullins</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Introduce Technology</h5>
                                                                <p><span>By</span> Bryan Clark</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Marketing Design</h5>
                                                                <p><span>By</span> Ida Manning</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">17:30</td>
                                                            <td className="hover-bg">
                                                                <h5>Meet Up Marketing</h5>
                                                                <p><span>By</span> Mc Cage</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Conect People</h5>
                                                                <p><span>By</span> James Colon</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Maximize CEO</h5>
                                                                <p><span>By</span> Elmer Dunn</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Martha Fuller</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">18:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Technology Future</h5>
                                                                <p><span>By</span> Thomas Munoz</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Mattie Hanson</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Camping</h5>
                                                                <p><span>By</span> Rachel Arnold</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Leonard Daniels</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                                            <div className="schedule-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>
                                                                <strong>Day 1</strong>
                                                                <span>May 09, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 2</strong>
                                                                <span>May 11, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 3</strong>
                                                                <span>May 12, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 4</strong>
                                                                <span>May 14, 2019</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="event-time">16:00</td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">17:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Talking To Life</h5>
                                                                <p><span>By</span> John Smith</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Delia Mullins</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Introduce Technology</h5>
                                                                <p><span>By</span> Bryan Clark</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Marketing Design</h5>
                                                                <p><span>By</span> Ida Manning</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">18:30</td>
                                                            <td className="hover-bg">
                                                                <h5>Meet Up Marketing</h5>
                                                                <p><span>By</span> Mc Cage</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Conect People</h5>
                                                                <p><span>By</span> James Colon</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Maximize CEO</h5>
                                                                <p><span>By</span> Elmer Dunn</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Martha Fuller</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">19:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Technology Future</h5>
                                                                <p><span>By</span> Thomas Munoz</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Mattie Hanson</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Camping</h5>
                                                                <p><span>By</span> Rachel Arnold</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Leonard Daniels</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-4" role="tabpanel">
                                            <div className="schedule-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>
                                                                <strong>Day 1</strong>
                                                                <span>May 09, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 2</strong>
                                                                <span>May 11, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 3</strong>
                                                                <span>May 12, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 4</strong>
                                                                <span>May 14, 2019</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="event-time">09:00</td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">10:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Talking To Life</h5>
                                                                <p><span>By</span> John Smith</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Delia Mullins</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Introduce Technology</h5>
                                                                <p><span>By</span> Bryan Clark</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Marketing Design</h5>
                                                                <p><span>By</span> Ida Manning</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">13:30</td>
                                                            <td className="hover-bg">
                                                                <h5>Meet Up Marketing</h5>
                                                                <p><span>By</span> Mc Cage</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Conect People</h5>
                                                                <p><span>By</span> James Colon</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Maximize CEO</h5>
                                                                <p><span>By</span> Elmer Dunn</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Martha Fuller</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">14:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Technology Future</h5>
                                                                <p><span>By</span> Thomas Munoz</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Mattie Hanson</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Camping</h5>
                                                                <p><span>By</span> Rachel Arnold</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Leonard Daniels</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-5" role="tabpanel">
                                            <div className="schedule-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>
                                                                <strong>Day 1</strong>
                                                                <span>May 09, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 2</strong>
                                                                <span>May 11, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 3</strong>
                                                                <span>May 12, 2019</span>
                                                            </th>
                                                            <th>
                                                                <strong>Day 4</strong>
                                                                <span>May 14, 2019</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="event-time">20:00</td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                            <td className="break hover-bg">
                                                                <h5>Coffee Break</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">22:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Talking To Life</h5>
                                                                <p><span>By</span> John Smith</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Delia Mullins</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Introduce Technology</h5>
                                                                <p><span>By</span> Bryan Clark</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Marketing Design</h5>
                                                                <p><span>By</span> Ida Manning</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">23:30</td>
                                                            <td className="hover-bg">
                                                                <h5>Meet Up Marketing</h5>
                                                                <p><span>By</span> Mc Cage</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Conect People</h5>
                                                                <p><span>By</span> James Colon</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Maximize CEO</h5>
                                                                <p><span>By</span> Elmer Dunn</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Martha Fuller</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="event-time">24:00</td>
                                                            <td className="hover-bg">
                                                                <h5>Technology Future</h5>
                                                                <p><span>By</span> Thomas Munoz</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Reinventing Experiences</h5>
                                                                <p><span>By</span> Mattie Hanson</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Camping</h5>
                                                                <p><span>By</span> Rachel Arnold</p>
                                                            </td>
                                                            <td className="hover-bg">
                                                                <h5>Social Website</h5>
                                                                <p><span>By</span> Leonard Daniels</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Schedule Table Section End */}
                {/* Newslatter Section Begin */}
                <section className="newslatter-section about-newslatter">
                    <div className="container">
                        <div className="newslatter-inner set-bg" data-setbg="img/newslatter-bg.jpg">
                            <div className="ni-text">
                                <h3>Subscribe Newsletter</h3>
                                <p>Subscribe to our newsletter and don’t miss anything</p>
                            </div>
                            <form action="#" className="ni-form">
                                <input type="text" placeholder="Your email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* Newslatter Section End */}
                {/* Contact Section Begin */}
                <section className="contact-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Location</h2>
                                    <p>Get directions to our event center</p>
                                </div>
                                <div className="cs-text">
                                    <div className="ct-address">
                                        <span>Address:</span>
                                        <p>01 Pascale Springs Apt. 339, NY City <br />United State</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            (+12)-345-67-8910
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            info.colorlib@gmail.com
                                        </li>
                                    </ul>
                                    <div className="ct-links">
                                        <span>Website:</span>
                                        <p>https://conference.colorlib.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cs-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd" height={400} style={{ border: 0 }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section End */}
            </div>


            <Footer />
        </div>
    )
}

export default Schedule
