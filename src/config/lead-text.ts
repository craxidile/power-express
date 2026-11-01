import { Locale } from '../models/_commons/localized';

type Option = { value: string; label: string };

export interface LeadText {
  seoTitle: string;
  seoDescription: string;
  title: string;
  intro: string;
  steps: string[];
  name: string;
  company: string;
  phone: string;
  lineId: string;
  email: string;
  contactHint: string;
  bill: string;
  billOptions: Option[];
  province: string;
  ownership: string;
  ownershipOptions: Option[];
  pattern: string;
  patternOptions: Option[];
  notes: string;
  file: string;
  fileHint: string;
  consent: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorGeneric: string;
  errorContact: string;
  errorConsent: string;
  errorFile: string;
  choose: string;
}

export const leadText: { [key in Locale]: LeadText } = {
  th: {
    seoTitle: 'ประเมินโซลาร์รูฟท็อปฟรี ส่งบิลค่าไฟ รับรายงานใน 48 ชั่วโมง',
    seoDescription:
      'ส่งบิลค่าไฟของโรงงานหรืออาคาร รับรายงานประเมินการติดตั้งโซลาร์รูฟท็อปและตัวเลขประหยัดที่เหมาะกับหน้างานของคุณฟรี ภายใน 48 ชั่วโมง ลงทุน 0 บาท',
    title: 'ประเมินโซลาร์รูฟท็อปฟรี',
    intro:
      'ส่งบิลค่าไฟของคุณ รับรายงานประเมินขนาดระบบและตัวเลขประหยัดที่เหมาะกับหน้างาน ภายใน 48 ชั่วโมง ไม่มีค่าใช้จ่าย',
    steps: [
      'กรอกข้อมูลและแนบบิลค่าไฟ',
      'ทีมงานตรวจสอบและติดต่อกลับ',
      'รับรายงานประเมินภายใน 48 ชั่วโมง',
    ],
    name: 'ชื่อ-นามสกุล',
    company: 'บริษัท / หน่วยงาน',
    phone: 'เบอร์โทรศัพท์',
    lineId: 'LINE ID',
    email: 'อีเมล',
    contactHint: 'กรอกอย่างน้อย 1 ช่องทางที่ให้ติดต่อกลับได้',
    bill: 'ค่าไฟต่อเดือน (โดยประมาณ)',
    billOptions: [
      { value: 'lt_150k', label: 'ต่ำกว่า 150,000 บาท' },
      { value: '150k_500k', label: '150,000 - 500,000 บาท' },
      { value: '500k_1m', label: '500,000 - 1,000,000 บาท' },
      { value: 'gt_1m', label: 'มากกว่า 1,000,000 บาท' },
      { value: 'unknown', label: 'ไม่ทราบ' },
    ],
    province: 'จังหวัดที่ตั้งโรงงาน / อาคาร',
    ownership: 'กรรมสิทธิ์อาคาร',
    ownershipOptions: [
      { value: 'owned', label: 'เป็นเจ้าของ' },
      { value: 'lease_15_plus', label: 'เช่า สัญญาเกิน 15 ปี' },
      { value: 'lease_short', label: 'เช่า สัญญาสั้นกว่า 15 ปี' },
      { value: 'unknown', label: 'ไม่ทราบ' },
    ],
    pattern: 'ช่วงเวลาที่ใช้ไฟมากที่สุด',
    patternOptions: [
      { value: 'daytime', label: 'กลางวันเป็นหลัก' },
      { value: '24h', label: 'ตลอด 24 ชั่วโมง' },
      { value: 'night', label: 'กลางคืนเป็นหลัก' },
      { value: 'unknown', label: 'ไม่ทราบ' },
    ],
    notes: 'ข้อมูลเพิ่มเติม (ไม่บังคับ)',
    file: 'แนบบิลค่าไฟ (ไม่บังคับ)',
    fileHint: 'ไฟล์ PDF, JPG หรือ PNG ขนาดไม่เกิน 10 MB',
    consent:
      'ข้าพเจ้ายินยอมให้ บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด เก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลข้างต้น เพื่อติดต่อกลับและจัดทำรายงานประเมินตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
    submit: 'ส่งข้อมูลเพื่อประเมินฟรี',
    sending: 'กำลังส่งข้อมูล...',
    successTitle: 'ได้รับข้อมูลเรียบร้อยแล้ว',
    successBody:
      'ขอบคุณครับ/ค่ะ ทีมงาน Power Express จะติดต่อกลับโดยเร็วที่สุด และส่งรายงานประเมินภายใน 48 ชั่วโมงทำการ',
    errorGeneric: 'ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่ หรือโทร 082-096-6595',
    errorContact: 'กรุณากรอกเบอร์โทร, LINE ID หรืออีเมลอย่างน้อย 1 ช่องทาง',
    errorConsent: 'กรุณายินยอมการเก็บและใช้ข้อมูลส่วนบุคคล',
    errorFile: 'ไฟล์ต้องเป็น PDF, JPG หรือ PNG และมีขนาดไม่เกิน 10 MB',
    choose: 'เลือก',
  },
  en: {
    seoTitle: 'Free Rooftop Solar Assessment: Send Your Bill, Get a Report in 48 Hours',
    seoDescription:
      'Send your factory or building electricity bill and get a free rooftop solar assessment and savings estimate tailored to your site within 48 hours. Zero investment.',
    title: 'Free Rooftop Solar Assessment',
    intro:
      'Send your electricity bill and get a system size and savings estimate tailored to your site within 48 hours, at no cost.',
    steps: [
      'Fill in the form and attach your bill',
      'Our team reviews and contacts you',
      'Receive your assessment within 48 hours',
    ],
    name: 'Full name',
    company: 'Company / organization',
    phone: 'Phone',
    lineId: 'LINE ID',
    email: 'Email',
    contactHint: 'Provide at least one way for us to reach you',
    bill: 'Monthly electricity bill (approx.)',
    billOptions: [
      { value: 'lt_150k', label: 'Under 150,000 THB' },
      { value: '150k_500k', label: '150,000 - 500,000 THB' },
      { value: '500k_1m', label: '500,000 - 1,000,000 THB' },
      { value: 'gt_1m', label: 'Over 1,000,000 THB' },
      { value: 'unknown', label: 'Not sure' },
    ],
    province: 'Province of the site',
    ownership: 'Building ownership',
    ownershipOptions: [
      { value: 'owned', label: 'Owned' },
      { value: 'lease_15_plus', label: 'Leased, more than 15 years left' },
      { value: 'lease_short', label: 'Leased, less than 15 years left' },
      { value: 'unknown', label: 'Not sure' },
    ],
    pattern: 'When do you use most power?',
    patternOptions: [
      { value: 'daytime', label: 'Mostly daytime' },
      { value: '24h', label: '24 hours' },
      { value: 'night', label: 'Mostly night' },
      { value: 'unknown', label: 'Not sure' },
    ],
    notes: 'Anything else we should know (optional)',
    file: 'Attach your bill (optional)',
    fileHint: 'PDF, JPG or PNG, up to 10 MB',
    consent:
      'I consent to Powerexpress1980 Company Limited collecting, using and disclosing the personal data above to contact me and prepare the assessment, in accordance with the Personal Data Protection Act B.E. 2562 (2019).',
    submit: 'Request free assessment',
    sending: 'Sending...',
    successTitle: 'We have received your details',
    successBody:
      'Thank you. The Power Express team will contact you shortly and send your assessment within 48 business hours.',
    errorGeneric: 'Could not send. Please try again or call 082-096-6595.',
    errorContact: 'Please provide a phone number, LINE ID or email.',
    errorConsent: 'Please consent to the use of your personal data.',
    errorFile: 'The file must be a PDF, JPG or PNG up to 10 MB.',
    choose: 'Select',
  },
};
