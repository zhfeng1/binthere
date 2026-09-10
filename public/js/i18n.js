// English source messages are stable keys. Only explicitly marked interface
// elements are translated; note text, passwords, links and keys stay untouched.
const zh = {
  'binthere · zero-knowledge paste': 'binthere · 端到端加密笔记',
  'Encrypted, zero-knowledge pastebin. Your text is encrypted in your browser; the server never sees it.': '端到端加密的私密笔记。在浏览器内完成加密，服务器无法读取原文。',
  'Announcement': '公告',
  'New': '新文章',
  'Why I don’t trust pastebins either': '为什么我也不信任在线粘贴板',
  'Dismiss announcement': '关闭公告',
  'binthere — home': 'binthere 首页',
  'binthere on GitHub': '在 GitHub 查看 binthere',
  'binthere on GitHub — {count} star': '在 GitHub 查看 binthere · {count} 个星标',
  'binthere on GitHub — {count} stars': '在 GitHub 查看 binthere · {count} 个星标',
  'new paste': '新建',
  'Toggle light/dark theme': '切换浅色或深色主题',
  'private by design': '为隐私而生',
  'Say it once.': '只说一次。',
  'Sealed.': '阅后即焚。',
  'Your note stays yours. Read once, then self-destructs.': '你的笔记，只给想给的人看。读取一次，随即销毁。',
  'Write or paste your note… Only the recipient with the link can decrypt it.': '在这里输入或粘贴笔记……只有持有完整链接的收件人才能解密。',
  'Note content': '笔记内容',
  'Protect with a password': '为笔记设置密码保护',
  'Password': '密码',
  'Encrypt and create link': '加密并生成链接',
  'Create link': '生成链接',
  'How binthere protects your note': 'binthere 如何保护你的笔记',
  'Private': '保护隐私',
  'End-to-end encrypted': '端到端加密',
  'One-time view': '仅可读取一次',
  'Auto-deletes in 24 hours': '24 小时后自动销毁',
  'Paste password': '设置笔记密码',
  'This password will be required to unlock this paste.': '收件人需要同时持有完整链接和密码，才能打开这条笔记。',
  'Enter a password': '输入密码',
  'Repeat the password': '再次输入密码',
  'Repeat password': '确认密码',
  'Show password': '显示密码',
  'Hide password': '隐藏密码',
  'Cancel': '取消',
  'Create': '创建',
  'sealed': '已加密封存',
  'Share your link': '分享专属链接',
  "Send this to the one person who should read it — it self-destructs the moment it's opened. The key that unlocks it lives inside the link itself, so keep the whole link private and never send it back to us.": '将完整链接发给收件人，笔记读取一次后就会销毁。解密密钥保存在链接中，请妥善保管，不要公开分享。',
  'Anyone with this link can read the note once.': '持有完整链接的人可读取这条笔记一次；设有密码时，还需输入正确密码。',
  'scan to open · one-time read': '扫码打开 · 仅可读取一次',
  'QR code for the paste link': '笔记链接二维码',
  'copy link': '复制链接',
  'Open link': '打开链接',
  'Create another': '再写一条',
  'Delete now': '立即删除',
  'locked': '密码保护',
  'Enter the password': '输入笔记密码',
  'This note has a password. Ask whoever sent it to you, then type it in to open the note.': '这条笔记设有密码。请向发送者索取密码，输入后即可打开。',
  'Enter password': '输入密码',
  'Decrypt': '解密',
  'Copy text': '复制原文',
  'Raw': '查看原文',
  'Rendered': '查看排版',
  'loading…': '加载中……',
  'Reveal note': '查看笔记',
  'Deletes in': '距离自动销毁还有',
  'Create new paste': '新建笔记',
  'Cryptography': '加密方式',
  'AES-256-GCM · HKDF-SHA256 · Key stays in the URL': 'AES-256-GCM · HKDF-SHA256 · 密钥仅保存在链接的',
  'Source': '源代码',
  'Threat Model': '安全模型',
  'Security': '安全联系',
  'Developer': '原作者',
  'Type something first.': '请先输入笔记内容。',
  'Encrypting…': '加密中……',
  'Enter a password, or cancel.': '请输入密码，或取消设置。',
  'Password is too long — 128 characters max.': '密码过长，最多可输入 128 个字符。',
  'Passwords do not match — repeat the same password in both fields.': '两次输入的密码不一致，请重新确认。',
  'copied': '已复制',
  'failed': '复制失败',
  'Uses the one view — open?': '将用掉唯一一次读取机会，确认打开？',
  'Permanently delete?': '确认永久删除？',
  'Deleting…': '删除中……',
  'This paste has been deleted.': '这条笔记已删除。',
  'deleted': '已删除',
  'Deleted': '已删除',
  'This link is malformed — check that it was copied completely.': '链接格式不正确，请检查是否复制完整。',
  'This link is missing its decryption key.': '链接中缺少解密密钥，请向发送者索取完整链接。',
  'decrypting…': '解密中……',
  'Decrypting…': '解密中……',
  'checking…': '正在检查笔记……',
  'Could not decrypt this note. The link may be corrupted or altered.': '无法解密这条笔记，链接可能已损坏或被修改。',
  'Could not read this note — the server response was malformed.': '无法读取笔记，服务器返回的数据格式不正确。',
  'This note can only be viewed once.': '这条笔记只能读取一次，查看后将立即销毁。',
  'This note has expired — it can no longer be opened.': '这条笔记已过期，无法再打开。',
  'Could not decrypt this note — the link may be incomplete or corrupted. The note was not opened and still exists.': '无法解密，链接可能不完整或已损坏。笔记尚未打开，仍然保留。',
  'This single-use note is password-protected. It is destroyed only once the correct password unlocks it.': '这条一次性笔记设有密码。输入正确密码并读取后，笔记才会销毁。',
  'This note is protected by a password in addition to the key in the link.': '除链接中的密钥外，你还需要密码才能解密这条笔记。',
  'Please enter a password.': '请输入密码。',
  'Wrong password — try again. If you are sure it is correct, the link may be corrupted or altered.': '密码不正确，请重试。如果确认密码无误，链接可能已损坏或被修改。',
  'Could not reach the server — check your connection and try again.': '无法连接服务器，请检查网络后重试。',
  'This paste has expired or was already opened.': '这条笔记已过期，或已被读取并销毁。',
  'This paste has expired, was already opened, or never existed.': '这条笔记已过期、已被读取，或不存在。',
  'markdown': 'Markdown',
  'code': '代码',
  'one-time view · now deleted': '仅限一次 · 已销毁',
  'copied to clipboard': '已复制到剪贴板',
  'copy failed': '复制失败，请手动复制',
  'expired': '已过期',
  'Too many pastes from your network — please wait a moment.': '当前网络创建笔记过于频繁，请稍后再试。',
  'That document is too large.': '笔记内容过大，请缩短后再试。',
  'That document is too large (1 MiB max).': '笔记内容过大，最多支持 1 MiB。',
  'Server error. Please try again.': '服务器出现错误，请稍后重试。',
  'Something went wrong. Please try again.': '操作失败，请重试。',
  'Invalid note data. Please try again.': '笔记数据无效，请重试。',
  'Could not delete this note. Please try again.': '无法删除这条笔记，请重试。',
  'This note no longer exists.': '这条笔记已不存在。',
};

const STORAGE_KEY = 'binthere:language';
let language = 'zh-CN';
try {
  if (localStorage.getItem(STORAGE_KEY) === 'en') language = 'en';
} catch { /* storage disabled — keep the Chinese default */ }

export function t(message, params = {}) {
  const translated = language === 'zh-CN' && Object.hasOwn(zh, message) ? zh[message] : message;
  return translated.replace(/\{(\w+)\}/g, (match, name) => String(params[name] ?? match));
}

// Keep the message key with the element so switching language also updates
// loading, confirmation, error and copied states without replaying any action.
export function setText(element, message, params = {}) {
  if (!element) return;
  element.dataset.i18n = message;
  element.dataset.i18nParams = JSON.stringify(params);
  element.textContent = t(message, params);
}

const ATTRIBUTES = ['aria-label', 'placeholder', 'title', 'alt', 'content'];
export function setAttributeText(element, attribute, message, params = {}) {
  if (!element || !ATTRIBUTES.includes(attribute)) return;
  element.setAttribute(`data-i18n-${attribute}`, message);
  element.setAttribute(`data-i18n-${attribute}-params`, JSON.stringify(params));
  element.setAttribute(attribute, t(message, params));
}

function readParams(element, attribute) {
  try { return JSON.parse(element.getAttribute(attribute) || '{}'); }
  catch { return {}; }
}

function translatePage() {
  document.documentElement.lang = language;
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = t(element.dataset.i18n, readParams(element, 'data-i18n-params'));
  }
  for (const attribute of ATTRIBUTES) {
    for (const element of document.querySelectorAll(`[data-i18n-${attribute}]`)) {
      element.setAttribute(attribute, t(element.getAttribute(`data-i18n-${attribute}`),
        readParams(element, `data-i18n-${attribute}-params`)));
    }
  }
  const button = document.getElementById('language-toggle');
  if (button) {
    const chinese = language === 'zh-CN';
    // The destination's native name makes the switch recognizable in either language.
    button.textContent = chinese ? 'English' : '中文';
    button.lang = chinese ? 'en' : 'zh-CN';
    button.setAttribute('aria-label', chinese ? '切换到英文 / Switch to English' : 'Switch to Chinese / 切换到中文');
    button.title = chinese ? '切换到英文' : 'Switch to Chinese';
  }
}

export function initI18n() {
  translatePage();
  document.getElementById('language-toggle')?.addEventListener('click', () => {
    language = language === 'zh-CN' ? 'en' : 'zh-CN';
    try { localStorage.setItem(STORAGE_KEY, language); }
    catch { /* switching still works without persistent storage */ }
    translatePage();
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    language = event.newValue === 'en' ? 'en' : 'zh-CN';
    translatePage();
  });
}
