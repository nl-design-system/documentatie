---
title: Testomgeving
hide_title: true
hide_table_of_contents: false
sidebar_label: Testomgeving
pagination_label: Testomgeving
description: Uitleg over de versiebeheer van code in NL Design System
keywords:
  - dtap
  - opap
  - test
---

# Testomgeving

Gebruik "branch deployments" voor GitHub Pull Requests als test-omgeving. Op deze manier is het laagdrempelig om de functionaliteit te testen, en kost het minder tijd om een goede review te doen.

Gebruik Vercel voor het maken van branch deployments voor GitHub Pull requests, voor projecten waarvan de build een statische website is. Gebruik voor zover mogelijk infrastructure-as-code om Vercel te configureren, via de [vercel terraform provider](https://registry.terraform.io/providers/vercel/vercel/latest/docs) in de [nl-design-system/terraform repository](http://github.com/nl-design-system/terraform).
