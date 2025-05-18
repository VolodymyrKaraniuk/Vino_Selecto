#!/bin/bash
cd ./helm-charts/
helm lint ./vinoselecto
helm dependency update vinoselecto/
helm upgrade --install --wait --timeout 180s --debug vinoselecto ./backend-*.tgz
helm upgrade --install --wait --timeout 180s --debug vinoselecto ./frontend-*.tgz
