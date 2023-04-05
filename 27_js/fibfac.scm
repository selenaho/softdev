;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname fibfac) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;Team Cereal Killers :: Selena Ho, Wanying Li
;SoftDev pd8
;K27 -- Basic functions in JavaScript
;2023-04-04

;Scheme Antecedents for JS work

;factorial:
(define
 fact (lambda (n)
   (if (< n 2)
       1
       (* n (fact (- n 1)))
)))


;(fact 1) ;"...should be  1"
;(fact 2) ;"...should be  2"
;(fact 3) ;"...should be  6"
;(fact 4) ;"...should be  24"
;(fact 5) ;"...should be  120"


;fib:
(define
  fib (lambda (n)
        (if (< n 2)
            n
            (+ (fib(- n 1)) (fib(- n 2)))
            )))

(fib 0) ;"...should be  0"
(fib 1) ;"...should be  1"
(fib 2) ;"...should be  1"
(fib 3) ;"...should be  2"
(fib 4) ;"...should be  3"
(fib 5)
;=================================================================

