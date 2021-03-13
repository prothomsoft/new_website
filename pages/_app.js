import React, { Fragment } from "react";
import App from "next/app";
import { PageTransition } from "next-page-transitions";

export default class MyApp extends App {
      render() {
        const { Component, pageProps, router } = this.props
        return (
          <Fragment>
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} key={router.route} />
            </PageTransition>
            <style jsx global>{`
              .page-transition-enter {
                opacity: 0;
              }
              .page-transition-enter-active {
                opacity: 1;
                transition: opacity 300ms;
              }
              .page-transition-exit {
                opacity: 1;
              }
              .page-transition-exit-active {
                opacity: 0;
                transition: opacity 300ms;
              }
            `}</style>
          </Fragment>
        )
      }







}
