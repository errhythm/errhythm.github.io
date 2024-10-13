---
title: 'The Internet Archive Breach: Why your password might be safe!'
description: Discover why your password might still be secure despite the Internet Archive breach. Learn about bcrypt's role in password protection, the importance of strong passwords, and best practices for online security in the wake of data breaches.
date: 2024-10-13
draft: false
slug: internet-archive-breach-password-safety-bcrypt
image: '/images/internet-archive-breach-bcrypt.jpg'
tags:
  - Cybersecurity
  - Password Security
  - Data Breach
  - Bcrypt
  - Internet Archive
---

Recently, the Internet Archive, a well-known digital library famous for its "Wayback Machine," was the target of a significant breach. Attackers breached the website between October 9 and October 11, 2024, revealing more than **31 million user accounts**. The breach included email addresses and hashed passwords, leading to widespread concern among users.

<blockquote class="twitter-tweet" data-conversation="none">
<img src="https://pbs.twimg.com/media/GZeg4gxXEAAAR0m?format=png&name=small" alt="Internet Archive Breach Tweet" width="550px" />
<p lang="en" dir="ltr">was it a little more than a DDoS? <a href="https://t.co/eoJI7Gr4ya">pic.twitter.com/eoJI7Gr4ya</a></p>&mdash; Tom Warren (@tomwarren) <a href="https://twitter.com/tomwarren/status/1844119664349294615?ref_src=twsrc%5Etfw">October 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Do they have our passwords as well? Users without Password Managers should definitely be worried about this. But a breath of relief for you people. At least the Internet Archive site hash the user passwords using Bcrypt. This hashing method is highly regarded for its ability to securely store passwords, providing an essential layer of security. So, if you're curious about whether your password remains secure, here's what you need to know.

### Bcrypt’s Security

The passwords disclosed in the Internet Archive incident were hashed with bcrypt, a hashing technology that is slow and resource heavy. Bcrypt uses numerous rounds of encryption, so even if attackers have the hashed passwords, decrypting them would require significant computer power. This makes bcrypt a strong choice against typical assaults such as brute-force and rainbow table attacks, in which hackers test all possible password combinations to discover a match. In reality, bcrypt's purposeful latency renders these solutions unfeasible and wasteful, while yet offering a high level of password security.

### Salted Hashes

In addition, bcrypt employs _salts_, which are random data added to each password before to hashing. This provides further protection against assaults since, even if two users use the same password, their hashes will differ owing to distinct salts. The addition of salts to the Internet Archive's encryption mechanism makes it exceedingly difficult for hackers to use precomputed attacks like rainbow tables. Even in major breaches, bcrypt's mix of encryption and salts prevents user passwords from being easily reversed.

### Good News for Strong Passwords

If you used a strong, unique password for your Internet Archive account, it is probably safe. Cracking bcrypt hashes becomes much more difficult when using a strong password that includes letters, numbers, and special characters. While no system is unbreakable, a well-hashed and salted password saved using bcrypt is one of the most secure choices available today.

### Change Your Password Anyway

Even if bcrypt provides great security, changing your password is still a good practice. After this attack, the Internet Archive advised users to change their credentials. Moreover, it's advisable to update those too if you have used your Internet Archive password on other websites.

### Why You Should Use a Password Manager

Using a **password manager** is one crucial first step towards increasing your general security in view of the Internet Archive breach. All of your passwords are kept in an encrypted vault within a password manager, which only allows access with a master password. This guarantees that, without you having to remember all of them, every one of your accounts may have unique, sophisticated passwords. A password manager also guards against reusing passwords, a typical weakness that raises the danger of exposure should one service be hacked as it did in this attack.

![Checking if my email was compromised in the Internet Archive breach. It was!](/images/haveibeenpwned-archive-org.png)

### Have I Been Pwned: Check if You’ve Been Compromised

Along with using a password manager, you should also check to see if your email address or password has been leaked in known data leaks. Have I Been Pwned (https://haveibeenpwned.com) is a useful tool for this because it lets you see if your account information has been stolen in a number of different internet security hacks. If your data is stolen, the site will let you know by emailing you the address you provided. If these databases find your account, change your password right away on the sites that are affected, and think about using a password manager to keep this from happening again.
