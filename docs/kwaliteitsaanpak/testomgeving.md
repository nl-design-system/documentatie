---
title: Testomgeving
hide_title: true
hide_table_of_contents: false
sidebar_label: Testomgeving
pagination_label: Testomgeving
description: Branch deployments van GitHub Pull Requests zijn de testomgevingen.
keywords:
  - dtap
  - otap
  - test
---

# Testomgeving

Gebruik "branch deployments" van GitHub Pull Requests als testomgeving. Maak het hiermee laagdrempelig om de functionaliteit te testen, want zo kost het anderen minder tijd om een goede review te doen.

Gebruik [Vercel](/vercel) voor het maken van branch deployments voor GitHub Pull requests, voor projecten waarvan de build een statische website is. Gebruik voor zover mogelijk infrastructure-as-code om Vercel te configureren, via de [vercel terraform provider](https://registry.terraform.io/providers/vercel/vercel/latest/docs) in de [nl-design-system/terraform repository](http://github.com/nl-design-system/terraform).
