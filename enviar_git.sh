#!/bin/bash

apt update -y && apt upgrade -y
clear
apt install git -y
clear
echo "Enviando Para O Git..."
git add .
git commit -am "Bot"
git push https://Surtadoo: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@github.com/Surtadoo/Bot.git --all
#  clear
echo "Git Enviado."