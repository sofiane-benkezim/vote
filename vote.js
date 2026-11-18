// استبدل القيمتين التاليتين ببيانات مشروعك من Supabase
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// المشاريع الستة الرسمية
const PROJECTS = [
  { id: 'ENSTP GO', name: 'ENSTP GO', tag: 'Mobilité & Campus' },
  { id: 'URBEE', name: 'URBEE', tag: 'Smart City' },
  { id: 'CONGUROU', name: 'CONGUROU', tag: 'Logistique & Innovation' },
  { id: 'BEEVER', name: 'BEEVER', tag: 'Ingénierie & Construction' },
  { id: 'ENSTP 360', name: 'ENSTP 360', tag: 'Visite Virtuelle & Tech' },
  { id: 'ENSTP NAV', name: 'ENSTP NAV', tag: 'Navigation & Orientation' }
];

// نظام النقاط الرسمي
const POINTS_MAP = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };
