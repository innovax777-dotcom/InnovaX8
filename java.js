    // تحديث بيانات الاتصال بسهولة من هنا فقط
    const contact = {
      email: "innovax@gmail.com",
      phoneDisplay: "+963 997 703 663",
      phoneTel: "+963997703663"
    };

    document.getElementById('email').textContent = contact.email;
    document.getElementById('phone').textContent = contact.phoneDisplay;
    const gmailBtn = document.getElementById('gmailBtn');
    const callBtn = document.getElementById('callBtn');

    // يفتح نافذة جيميل لإنشاء رسالة جديدة مع ملء الحقل To
    gmailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;

    // تفعيل رابط الهاتف
    callBtn.href = `tel:${contact.phoneTel}`;