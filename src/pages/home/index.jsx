import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from './languages.json';
import Particles from "react-tsparticles";
import option from "./particles.json";

import './index.less';

export default function () {
    // const isBrowser = useIsBrowser();
    // const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.['zh-CN'];

    return (
        <section className="coverpage">

            <section className="hero-barishal welcome_area">

                <Particles id="coverpage-tsparticles" className="particles" options={option}/>

                <div className="container h-100">
                    <div className="row h-100 justify-content-between align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="welcome_text_area">
                                <h2 className="wow fadeInUp ztop" data-wow-delay="0.2s">
                                    <span>DataFan ──</span><br/>
                                    <span>{dataSource.slogan.key}</span>
                                </h2>
                                <hr style={{marginBottom: '30px'}}/>
                                <h5 className="wow fadeInUp ztop" data-wow-delay="0.3s" style={{color: '#6c7a87',fontWeight: 600}}>
                                    {dataSource.slogan.description}
                                </h5>
                                <a className="btn datafan-btn btn mt-30 ztop" href="https://github.com/young-datafan"
                                   target="_blank">
                                    <i className="lni-github-original"></i>&nbsp;GitHub
                                </a>
                                <a className="btn datafan-btn btn-purple mt-30 ml-2 ztop"
                                   href="https://gitee.com/young-datafan" target="_blank"
                                   style={{marginLeft: '15px'}}>
                                    <img src={useBaseUrl('/home/gitee.png')} className="icon-gitee"></img>&nbsp;Gitee
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="welcome_area_thumb text-center ztop" data-wow-delay="0.2s">
                                <img src={useBaseUrl('/home/home-right.png')} alt="DataFan Planning"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="using_benefits_area" id="benefits" style={{backgroundColor: '#F6FAFE', paddingBottom: "150px"}}>

                <div className="mask-bg"></div>

                <div className="container" style={{paddingTop: "20px"}}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <div className="section_heading white text-center wow fadeInUp" data-wow-delay="0.2s">
                                <h3>{dataSource.common.projectFeatures}</h3>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            dataSource.feature.map((feature, i) => (
                                <div className="col-12 col-sm-6 col-lg-4 cour-function" key={i} index={i}>
                                    <div className="feature-item">
                                        <div className="single_benifits d-flex wow fadeInUp" data-wow-delay="200ms">
                                            <div className="icon_box"><i className={feature.icon}></i></div>
                                            <div className="benifits_text">
                                                <h5>{feature.title}</h5>
                                                <p>{feature.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </section>
    );
}
