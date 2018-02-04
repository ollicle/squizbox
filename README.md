# Squizbox

*Work in progress. Here be dragons!*

## Preview and adjust CSS media width breakpoints

This bookmarklet is an experiment to test the hypothesis that better tools can help answer the _design_ decision – *at what screen width should this change?*. Use it to visually preview either side of a breakpoint simultaneously. Media queries of the same measure are collated to edit them as one.

No more designing around fixed, arbitrary, breakpoints.

## Usage

### Install bookmarklet

Drag this link to your browser bookmark bar: <a href="javascript:(function(){ javascript:(function%20wrapper()%20%7B%0A%20%20%20%20var%20s%20%3D%20document.createElement('script')%0A%20%20%20%20s.innerText%20%3D%20'!'%20%2B%20bookmark.toString()%20%2B%20'()'%0A%20%20%20%20document.head.appendChild(s)%0A%20%20%20%20function%20bookmark()%20%7B%0A%20%20%20%20%20%20!function(e)%7Bfunction%20__webpack_require__(n)%7Bif(t%5Bn%5D)return%20t%5Bn%5D.exports%3Bvar%20i%3Dt%5Bn%5D%3D%7Bi%3An%2Cl%3A!1%2Cexports%3A%7B%7D%7D%3Breturn%20e%5Bn%5D.call(i.exports%2Ci%2Ci.exports%2C__webpack_require__)%2Ci.l%3D!0%2Ci.exports%7Dvar%20t%3D%7B%7D%3B__webpack_require__.m%3De%2C__webpack_require__.c%3Dt%2C__webpack_require__.i%3Dfunction(e)%7Breturn%20e%7D%2C__webpack_require__.d%3Dfunction(e%2Ct%2Cn)%7B__webpack_require__.o(e%2Ct)%7C%7CObject.defineProperty(e%2Ct%2C%7Bconfigurable%3A!1%2Cenumerable%3A!0%2Cget%3An%7D)%7D%2C__webpack_require__.n%3Dfunction(e)%7Bvar%20t%3De%26%26e.__esModule%3Ffunction()%7Breturn%20e.default%7D%3Afunction()%7Breturn%20e%7D%3Breturn%20__webpack_require__.d(t%2C%22a%22%2Ct)%2Ct%7D%2C__webpack_require__.o%3Dfunction(e%2Ct)%7Breturn%20Object.prototype.hasOwnProperty.call(e%2Ct)%7D%2C__webpack_require__.p%3D%22%22%2C__webpack_require__(__webpack_require__.s%3D11)%7D(%5Bfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bfunction%20noop()%7B%7Dfunction%20assign(e)%7Bfor(var%20t%2Cn%2Ci%3D1%2Cr%3Darguments.length%3Bi%3Cr%3Bi%2B%2B)%7Bn%3Darguments%5Bi%5D%3Bfor(t%20in%20n)e%5Bt%5D%3Dn%5Bt%5D%7Dreturn%20e%7Dfunction%20appendNode(e%2Ct)%7Bt.appendChild(e)%7Dfunction%20insertNode(e%2Ct%2Cn)%7Bt.insertBefore(e%2Cn)%7Dfunction%20detachNode(e)%7Be.parentNode.removeChild(e)%7Dfunction%20destroyEach(e%2Ct%2Cn)%7Bfor(var%20i%3Dn%3Bi%3Ce.length%3Bi%2B%3D1)e%5Bi%5D%26%26e%5Bi%5D.destroy(t)%7Dfunction%20createElement(e)%7Breturn%20document.createElement(e)%7Dfunction%20createText(e)%7Breturn%20document.createTextNode(e)%7Dfunction%20addListener(e%2Ct%2Cn)%7Be.addEventListener(t%2Cn%2C!1)%7Dfunction%20removeListener(e%2Ct%2Cn)%7Be.removeEventListener(t%2Cn%2C!1)%7Dfunction%20setAttribute(e%2Ct%2Cn)%7Be.setAttribute(t%2Cn)%7Dfunction%20toNumber(e)%7Breturn%22%22%3D%3D%3De%3Fvoid%200%3A%2Be%7Dfunction%20differs(e%2Ct)%7Breturn%20e!%3D%3Dt%7C%7Ce%26%26%22object%22%3D%3Dtypeof%20e%7C%7C%22function%22%3D%3Dtypeof%20e%7Dfunction%20dispatchObservers(e%2Ct%2Cn%2Ci)%7Bfor(var%20r%20in%20t)if(r%20in%20n)%7Bvar%20a%3Dn%5Br%5D%2Co%3Di%5Br%5D%3Bif(differs(a%2Co))%7Bvar%20s%3Dt%5Br%5D%3Bif(!s)continue%3Bfor(var%20u%3D0%3Bu%3Cs.length%3Bu%2B%3D1)%7Bvar%20c%3Ds%5Bu%5D%3Bc.__calling%7C%7C(c.__calling%3D!0%2Cc.call(e%2Ca%2Co)%2Cc.__calling%3D!1)%7D%7D%7D%7Dfunction%20get(e)%7Breturn%20e%3Fthis._state%5Be%5D%3Athis._state%7Dfunction%20fire(e%2Ct)%7Bvar%20n%3De%20in%20this._handlers%26%26this._handlers%5Be%5D.slice()%3Bif(n)for(var%20i%3D0%3Bi%3Cn.length%3Bi%2B%3D1)n%5Bi%5D.call(this%2Ct)%7Dfunction%20observe(e%2Ct%2Cn)%7Bvar%20i%3Dn%26%26n.defer%3Fthis._observers.post%3Athis._observers.pre%3Breturn(i%5Be%5D%7C%7C(i%5Be%5D%3D%5B%5D)).push(t)%2Cn%26%26!1%3D%3D%3Dn.init%7C%7C(t.__calling%3D!0%2Ct.call(this%2Cthis._state%5Be%5D)%2Ct.__calling%3D!1)%2C%7Bcancel%3Afunction()%7Bvar%20n%3Di%5Be%5D.indexOf(t)%3B~n%26%26i%5Be%5D.splice(n%2C1)%7D%7D%7Dfunction%20on(e%2Ct)%7Bif(%22teardown%22%3D%3D%3De)return%20this.on(%22destroy%22%2Ct)%3Bvar%20n%3Dthis._handlers%5Be%5D%7C%7C(this._handlers%5Be%5D%3D%5B%5D)%3Breturn%20n.push(t)%2C%7Bcancel%3Afunction()%7Bvar%20e%3Dn.indexOf(t)%3B~e%26%26n.splice(e%2C1)%7D%7D%7Dfunction%20set(e)%7Bthis._set(assign(%7B%7D%2Ce))%2CcallAll(this._root._oncreate)%7Dfunction%20callAll(e)%7Bfor(%3Be%26%26e.length%3B)e.pop()()%7Dn.d(t%2C%22c%22%2Cfunction()%7Breturn%20differs%7D)%2Cn.d(t%2C%22o%22%2Cfunction()%7Breturn%20dispatchObservers%7D)%2Cn.d(t%2C%22l%22%2Cfunction()%7Breturn%20callAll%7D)%2Cn.d(t%2C%22n%22%2Cfunction()%7Breturn%20i%7D)%2Cn.d(t%2C%22b%22%2Cfunction()%7Breturn%20appendNode%7D)%2Cn.d(t%2C%22h%22%2Cfunction()%7Breturn%20insertNode%7D)%2Cn.d(t%2C%22i%22%2Cfunction()%7Breturn%20detachNode%7D)%2Cn.d(t%2C%22j%22%2Cfunction()%7Breturn%20destroyEach%7D)%2Cn.d(t%2C%22a%22%2Cfunction()%7Breturn%20createElement%7D)%2Cn.d(t%2C%22e%22%2Cfunction()%7Breturn%20createText%7D)%2Cn.d(t%2C%22g%22%2Cfunction()%7Breturn%20addListener%7D)%2Cn.d(t%2C%22k%22%2Cfunction()%7Breturn%20removeListener%7D)%2Cn.d(t%2C%22f%22%2Cfunction()%7Breturn%20setAttribute%7D)%2Cn.d(t%2C%22d%22%2Cfunction()%7Breturn%20toNumber%7D)%2Cn.d(t%2C%22p%22%2Cfunction()%7Breturn%20noop%7D)%2Cn.d(t%2C%22m%22%2Cfunction()%7Breturn%20assign%7D)%3Bvar%20i%3D%7Bget%3Aget%2Cfire%3Afire%2Cobserve%3Aobserve%2Con%3Aon%2Cset%3Aset%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bt.a%3Dfunction(e)%7Bvar%20t%3De.split(%22%3A%22)%2Cn%3D-1!%3D%3Dt%5B0%5D.indexOf(%22min%22)%3F%22min%22%3A%22max%22%2Ci%3Dt%5B1%5D.match(%2F(%5Cd%2B%5C.%3F%5Cd*%3F)(px%7Cem%7Crem)%2F)%3Breturn%7Bvalue%3A%2Bi%5B1%5D%2Cunit%3Ai%5B2%5D%2CminMax%3An%7D%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3BObject.defineProperty(t%2C%22__esModule%22%2C%7Bvalue%3A!0%7D)%3Bvar%20i%3Dn(5)%2Cr%3Dfunction(e)%7B%5B%5D.slice.call(document.getElementsByTagName(e)).forEach(function(e)%7Be.remove()%7D)%7D%3Br(%22link%22)%2Cr(%22style%22)%2Cdocument.body.innerHTML%3D%22%22%3Bnew%20i.a(%7Btarget%3Adocument.querySelector(%22body%22)%2Cdata%3A%7Bbreakpoints%3A%5B%5D%2CiframeWidth%3A%221024%22%2Cselected%3Anull%2CselectedIndex%3Anull%7D%7D)%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bfunction%20recompute(e%2Ct%2Ca%2Co)%7B(o%7C%7C%22boundary%22in%20t%26%26n.i(i.c)(e.boundary%2Ca.boundary))%26%26(e.hasMin%3Dt.hasMin%3Dr.computed.hasMin(e.boundary)%2Ce.hasMax%3Dt.hasMax%3Dr.computed.hasMax(e.boundary))%2C(o%7C%7C%22hasMin%22in%20t%26%26n.i(i.c)(e.hasMin%2Ca.hasMin)%7C%7C%22hasMax%22in%20t%26%26n.i(i.c)(e.hasMax%2Ca.hasMax)%7C%7C%22px%22in%20t%26%26n.i(i.c)(e.px%2Ca.px))%26%26(e.maxPx%3Dt.maxPx%3Dr.computed.maxPx(e.hasMin%2Ce.hasMax%2Ce.px))%2C(o%7C%7C%22px%22in%20t%26%26n.i(i.c)(e.px%2Ca.px)%7C%7C%22boundary%22in%20t%26%26n.i(i.c)(e.boundary%2Ca.boundary)%7C%7C%22pixelsPerEm%22in%20t%26%26n.i(i.c)(e.pixelsPerEm%2Ca.pixelsPerEm))%26%26(e.minWidth%3Dt.minWidth%3Dr.computed.minWidth(e.px%2Ce.boundary%2Ce.pixelsPerEm))%2C(o%7C%7C%22maxPx%22in%20t%26%26n.i(i.c)(e.maxPx%2Ca.maxPx)%7C%7C%22boundary%22in%20t%26%26n.i(i.c)(e.boundary%2Ca.boundary)%7C%7C%22pixelsPerEm%22in%20t%26%26n.i(i.c)(e.pixelsPerEm%2Ca.pixelsPerEm))%26%26(e.maxWidth%3Dt.maxWidth%3Dr.computed.maxWidth(e.maxPx%2Ce.boundary%2Ce.pixelsPerEm))%7Dfunction%20add_css()%7Bvar%20e%3Dn.i(i.a)(%22style%22)%3Be.id%3D%22svelte-70565410-style%22%2Ce.textContent%3D%22%5Cn%5Ct%5Bsvelte-70565410%5D.breakpoint%2C%20%5Bsvelte-70565410%5D%20.breakpoint%20%7B%5Cn%5Ct%5Ctposition%3A%20relative%3B%5Cn%5Ct%5Cttext-align%3A%20center%3B%5Cn%5Ct%5Ctborder-top%3A%201px%20solid%20%23bbb%3B%5Cn%5Ct%5Ctborder-bottom%3A%201px%20solid%20%23bbb%3B%5Cn%5Ct%5Ctmargin-bottom%3A%200.7rem%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-70565410%5D.breakpoint-min%2C%20%5Bsvelte-70565410%5D%20.breakpoint-min%20%7B%5Cn%5Ct%5Ctheight%3A%201rem%3B%5Cn%5Ct%5Ctbackground-position%3A%2050%25%20center%3B%5Cn%5Ct%5Ctbackground-repeat%3A%20no-repeat%3B%5Cn%5Ct%5Ctbackground-color%3A%20%23ddd%3B%5Cn%5Ct%5Ctbackground-image%3A%20linear-gradient(%23eee%2C%23eee)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-70565410%5D.breakpoint-min.is-selected%2C%20%5Bsvelte-70565410%5D%20.breakpoint-min.is-selected%20%7B%5Cn%5Ct%5Ctbackground-color%3A%20%236DA819%3B%5Cn%5Ct%5Ctbackground-image%3A%20linear-gradient(%23eee%2C%23eee)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-70565410%5D.breakpoint-max%2C%20%5Bsvelte-70565410%5D%20.breakpoint-max%20%7B%5Cn%5Ct%5Ctheight%3A%201rem%3B%5Cn%5Ct%5Ctbackground-position%3A%2050%25%20center%3B%5Cn%5Ct%5Ctbackground-repeat%3A%20no-repeat%3B%5Cn%5Ct%5Ctbackground-color%3A%20%23eee%3B%5Cn%5Ct%5Ctbackground-image%3A%20linear-gradient(%23ddd%2C%23ddd)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-70565410%5D.breakpoint-max.is-selected%2C%20%5Bsvelte-70565410%5D%20.breakpoint-max.is-selected%20%7B%5Cn%5Ct%5Ctbackground-color%3A%20%23eee%3B%5Cn%5Ct%5Ctbackground-image%3A%20linear-gradient(%236DA819%2C%236DA819)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-70565410%5D.select-button%2C%20%5Bsvelte-70565410%5D%20.select-button%20%7B%5Cn%5Ct%5Ctpadding%3A%200.2rem%200.6rem%3B%5Cn%5Ct%5Ctborder%3A%201px%20solid%20%23aaa%3B%5Cn%5Ct%5Ctborder-radius%3A%200px%200px%200.6rem%200.6rem%3B%5Cn%5Ct%5Ctbackground-color%3A%20%23fff%3B%5Cn%5Ct%5Ctposition%3A%20absolute%3B%5Cn%5Ct%5Cttop%3A%20-1px%3B%5Cn%5Ct%5Ctleft%3A%2050%25%3B%5Cn%5Ct%5Cttransform%3A%20translate(-50%25)%3B%5Cn%5Ct%7D%5Cn%22%2Cn.i(i.b)(e%2Cdocument.head)%7Dfunction%20create_main_fragment(e%2Ct)%7Bfunction%20click_handler(e)%7Bvar%20n%3Dt.get()%3Bt.fire(%22select%22%2C%7Bpx%3An.px%2ChasMin%3An.hasMin%2ChasMax%3An.hasMax%2Cboundary%3An.boundary%7D)%7Dvar%20r%2Ca%2Co%2Cs%2Cu%2Cc%2Cd%3De.hasMin%26%26create_if_block(e%2Ct)%2Cl%3De.hasMax%26%26create_if_block_1(e%2Ct)%2Cm%3De.hasMin%26%26create_if_block_2(e%2Ct)%2Cf%3De.hasMax%26%26create_if_block_3(e%2Ct)%2Ch%3De.isSelected%26%26create_if_block_4(e%2Ct)%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.a)(%22div%22)%2Cd%26%26d.create()%2Ca%3Dn.i(i.e)(%22%5Cn%5Ct%22)%2Cl%26%26l.create()%2Co%3Dn.i(i.e)(%22%5Cn%5Ct%22)%2Cs%3Dn.i(i.a)(%22button%22)%2Cm%26%26m.create()%2Cu%3Dn.i(i.e)(%22%5Cn%5Ct%5Ct%22)%2Cf%26%26f.create()%2Cc%3Dn.i(i.e)(%22%5Cn%5Ct%22)%2Ch%26%26h.create()%2Cthis.hydrate()%7D%2Chydrate%3Afunction(e)%7Bn.i(i.f)(r%2C%22svelte-70565410%22%2C%22%22)%2Cr.className%3D%22breakpoint%22%2Cs.className%3D%22select-button%22%2Cs.type%3D%22button%22%2Cn.i(i.g)(s%2C%22click%22%2Cclick_handler)%7D%2Cmount%3Afunction(e%2Ct)%7Bn.i(i.h)(r%2Ce%2Ct)%2Cd%26%26d.mount(r%2Cnull)%2Cn.i(i.b)(a%2Cr)%2Cl%26%26l.mount(r%2Cnull)%2Cn.i(i.b)(o%2Cr)%2Cn.i(i.b)(s%2Cr)%2Cm%26%26m.mount(s%2Cnull)%2Cn.i(i.b)(u%2Cs)%2Cf%26%26f.mount(s%2Cnull)%2Cn.i(i.b)(c%2Cr)%2Ch%26%26h.mount(r%2Cnull)%7D%2Cupdate%3Afunction(e%2Cn)%7Bn.hasMin%3Fd%3Fd.update(e%2Cn)%3A(d%3Dcreate_if_block(n%2Ct)%2Cd.create()%2Cd.mount(r%2Ca))%3Ad%26%26(d.unmount()%2Cd.destroy()%2Cd%3Dnull)%2Cn.hasMax%3Fl%3Fl.update(e%2Cn)%3A(l%3Dcreate_if_block_1(n%2Ct)%2Cl.create()%2Cl.mount(r%2Co))%3Al%26%26(l.unmount()%2Cl.destroy()%2Cl%3Dnull)%2Cn.hasMin%3Fm%3Fm.update(e%2Cn)%3A(m%3Dcreate_if_block_2(n%2Ct)%2Cm.create()%2Cm.mount(s%2Cu))%3Am%26%26(m.unmount()%2Cm.destroy()%2Cm%3Dnull)%2Cn.hasMax%3Ff%3Ff.update(e%2Cn)%3A(f%3Dcreate_if_block_3(n%2Ct)%2Cf.create()%2Cf.mount(s%2Cnull))%3Af%26%26(f.unmount()%2Cf.destroy()%2Cf%3Dnull)%2Cn.isSelected%3Fh%3Fh.update(e%2Cn)%3A(h%3Dcreate_if_block_4(n%2Ct)%2Ch.create()%2Ch.mount(r%2Cnull))%3Ah%26%26(h.unmount()%2Ch.destroy()%2Ch%3Dnull)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%2Cd%26%26d.unmount()%2Cl%26%26l.unmount()%2Cm%26%26m.unmount()%2Cf%26%26f.unmount()%2Ch%26%26h.unmount()%7D%2Cdestroy%3Afunction()%7Bd%26%26d.destroy()%2Cl%26%26l.destroy()%2Cn.i(i.k)(s%2C%22click%22%2Cclick_handler)%2Cm%26%26m.destroy()%2Cf%26%26f.destroy()%2Ch%26%26h.destroy()%7D%7D%7Dfunction%20create_if_block(e%2Ct)%7Bvar%20r%2Ca%2Co%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.a)(%22div%22)%2Cthis.hydrate()%7D%2Chydrate%3Afunction(t)%7Br.className%3Da%3D%22breakpoint-min%20%22%2B(e.isSelected%3F%22is-selected%22%3A%22%22)%2Cr.style.cssText%3Do%3D%22background-size%3A%22%2Be.minWidth%2B%22%20100%25%22%7D%2Cmount%3Afunction(e%2Ct)%7Bn.i(i.h)(r%2Ce%2Ct)%7D%2Cupdate%3Afunction(e%2Ct)%7Ba!%3D%3D(a%3D%22breakpoint-min%20%22%2B(t.isSelected%3F%22is-selected%22%3A%22%22))%26%26(r.className%3Da)%2Co!%3D%3D(o%3D%22background-size%3A%22%2Bt.minWidth%2B%22%20100%25%22)%26%26(r.style.cssText%3Do)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%7D%2Cdestroy%3Ai.p%7D%7Dfunction%20create_if_block_1(e%2Ct)%7Bvar%20r%2Ca%2Co%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.a)(%22div%22)%2Cthis.hydrate()%7D%2Chydrate%3Afunction(t)%7Br.className%3Da%3D%22breakpoint-max%20%22%2B(e.isSelected%3F%22is-selected%22%3A%22%22)%2Cr.style.cssText%3Do%3D%22background-size%3A%22%2Be.maxWidth%2B%22%20100%25%22%7D%2Cmount%3Afunction(e%2Ct)%7Bn.i(i.h)(r%2Ce%2Ct)%7D%2Cupdate%3Afunction(e%2Ct)%7Ba!%3D%3D(a%3D%22breakpoint-max%20%22%2B(t.isSelected%3F%22is-selected%22%3A%22%22))%26%26(r.className%3Da)%2Co!%3D%3D(o%3D%22background-size%3A%22%2Bt.maxWidth%2B%22%20100%25%22)%26%26(r.style.cssText%3Do)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%7D%2Cdestroy%3Ai.p%7D%7Dfunction%20create_if_block_2(e%2Ct)%7Bvar%20r%2Ca%2Co%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.e)(%22min%3A%20%22)%2Co%3Dn.i(i.e)(a%3De.minWidth)%7D%2Cmount%3Afunction(e%2Ct)%7Bn.i(i.h)(r%2Ce%2Ct)%2Cn.i(i.h)(o%2Ce%2Ct)%7D%2Cupdate%3Afunction(e%2Ct)%7Ba!%3D%3D(a%3Dt.minWidth)%26%26(o.data%3Da)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%2Cn.i(i.i)(o)%7D%2Cdestroy%3Ai.p%7D%7Dfunction%20create_if_block_3(e%2Ct)%7Bvar%20r%2Ca%2Co%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.e)(%22max%3A%20%22)%2Co%3Dn.i(i.e)(a%3De.maxWidth)%7D%2Cmount%3Afunction(e%2Ct)%7Bn.i(i.h)(r%2Ce%2Ct)%2Cn.i(i.h)(o%2Ce%2Ct)%7D%2Cupdate%3Afunction(e%2Ct)%7Ba!%3D%3D(a%3Dt.maxWidth)%26%26(o.data%3Da)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%2Cn.i(i.i)(o)%7D%2Cdestroy%3Ai.p%7D%7Dfunction%20create_if_block_4(e%2Ct)%7Bfunction%20input_input_handler()%7Bf%3D!0%2Ct._set(%7Bpx%3An.i(i.d)(u.value)%7D)%2Cf%3D!1%7Dfunction%20input_1_input_handler()%7Bh%3D!0%2Ct._set(%7Bpx%3An.i(i.d)(d.value)%7D)%2Ch%3D!1%7Dvar%20r%2Ca%2Co%2Cs%2Cu%2Cc%2Cd%2Cl%2Cm%2Cf%3D!1%2Ch%3D!1%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.a)(%22label%22)%2Co%3Dn.i(i.e)(%22width%22)%2Cs%3Dn.i(i.e)(%22%5Cn%5Ct%5Ct%22)%2Cu%3Dn.i(i.a)(%22input%22)%2Cc%3Dn.i(i.e)(%22%5Cn%5Ct%5Ct%22)%2Cd%3Dn.i(i.a)(%22input%22)%2Cthis.hydrate()%7D%2Chydrate%3Afunction(t)%7Br.htmlFor%3Da%3D%22resizer%22%2Be.index%2Cu.type%3D%22number%22%2Cn.i(i.g)(u%2C%22input%22%2Cinput_input_handler)%2Cd.id%3Dl%3D%22resizer%22%2Be.index%2Cd.className%3D%22resizer%22%2Cd.type%3D%22range%22%2Cd.min%3D%220%22%2Cd.max%3Dm%3De.viewportWidth%2Cd.step%3D%224%22%2Cn.i(i.g)(d%2C%22input%22%2Cinput_1_input_handler)%7D%2Cmount%3Afunction(t%2Ca)%7Bn.i(i.h)(r%2Ct%2Ca)%2Cn.i(i.b)(o%2Cr)%2Cn.i(i.h)(s%2Ct%2Ca)%2Cn.i(i.h)(u%2Ct%2Ca)%2Cu.value%3De.px%2Cn.i(i.h)(c%2Ct%2Ca)%2Cn.i(i.h)(d%2Ct%2Ca)%2Cd.value%3De.px%7D%2Cupdate%3Afunction(e%2Ct)%7Ba!%3D%3D(a%3D%22resizer%22%2Bt.index)%26%26(r.htmlFor%3Da)%2Cf%7C%7C(u.value%3Dt.px)%2Cl!%3D%3D(l%3D%22resizer%22%2Bt.index)%26%26(d.id%3Dl)%2Cm!%3D%3D(m%3Dt.viewportWidth)%26%26(d.max%3Dm)%2Ch%7C%7C(d.value%3Dt.px)%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%2Cn.i(i.i)(s)%2Cn.i(i.i)(u)%2Cn.i(i.i)(c)%2Cn.i(i.i)(d)%7D%2Cdestroy%3Afunction()%7Bn.i(i.k)(u%2C%22input%22%2Cinput_input_handler)%2Cn.i(i.k)(d%2C%22input%22%2Cinput_1_input_handler)%7D%7D%7Dfunction%20Breakpoint(e)%7Be%3De%7C%7C%7B%7D%2Cthis._state%3De.data%7C%7C%7B%7D%2Crecompute(this._state%2Cthis._state%2C%7B%7D%2C!0)%2Cthis._observers%3D%7Bpre%3AObject.create(null)%2Cpost%3AObject.create(null)%7D%2Cthis._handlers%3DObject.create(null)%2Cthis._root%3De._root%7C%7Cthis%2Cthis._yield%3De._yield%2Cthis._torndown%3D!1%2Cdocument.getElementById(%22svelte-70565410-style%22)%7C%7Cadd_css()%2Cthis._fragment%3Dcreate_main_fragment(this._state%2Cthis)%2Ce.target%26%26(this._fragment.create()%2Cthis._fragment.mount(e.target%2Cnull))%2Ce._root%3Fe._root._oncreate.push(r.oncreate.bind(this))%3Ar.oncreate.call(this)%7Dvar%20i%3D(n(1)%2Cn(0))%2Cr%3Dfunction()%7Bfunction%20pxToEm(e%2Ct)%7Breturn%20t%2Fe%7Dfunction%20editBreakpoint(e%2Ct)%7Bvar%20n%3Dthis%3Bconsole.log(%22editBreakpoint%20arguments%22%2Carguments)%2Cconsole.log(%22editBreakpoint%20MediaLists%22%2Cthis._state.boundary.min%26%26this._state.boundary.min.MediaLists)%2Cconsole.log(%22editBreakpoint%20this%22%2Cthis)%3Bvar%20i%3Dthis._root.get(%22emsize%22)%3Bthis._state.boundary.min%26%26this._state.boundary.min.MediaLists.forEach(function(t)%7Bvar%20r%3D%22em%22%3D%3D%3Dn._state.boundary.min.unit%3FpxToEm(i%2Ce)%3Ae%2Ca%3D%22%22%2Bt.mediaText%2Co%3Da.replace(%2F(min-width%3A%5Cs)(%5B%5Cd.%5D%2B)(em%7Cpx)%2F%2Cfunction(e%2Ct%2Cn%2Ci)%7Breturn%22%22%2Bt%2Br%2Bi%7D)%3Bconsole.log(%22newMediaText%22%2Co)%2Ct.mediaText%3Do%2Cconsole.log(%22MediaList%22%2Ct)%7D)%2Cthis._state.boundary.max%26%26this._state.boundary.max.MediaLists.forEach(function(e)%7Bvar%20t%3D%22em%22%3D%3D%3Dn._state.boundary.max.unit%3FpxToEm(i%2Cn._state.maxPx)%3An._state.maxPx%2Cr%3D%22%22%2Be.mediaText%2Ca%3Dr.replace(%2F(max-width%3A%5Cs)(%5B%5Cd.%5D%2B)(em%7Cpx)%2F%2Cfunction(e%2Cn%2Ci%2Cr)%7Breturn%22%22%2Bn%2Bt%2Br%7D)%3Bconsole.log(%22newMediaText%22%2Ca)%2Ce.mediaText%3Da%2Cconsole.log(%22MediaList%22%2Ce)%7D)%2Cthis.fire(%22edit%22%2C%7BpixelWidth%3Athis.get(%22px%22)%7D)%7Dreturn%7Boncreate%3Afunction()%7Bconsole.log(%22breakpoint%20boundary%22%2Cthis.get(%22boundary%22))%2Cthis.set(%7Bpx%3Athis.get(%22boundary%22).pixels%7D)%2Cthis.set(%7BpixelsPerEm%3Athis._root.get(%22emsize%22)%7D)%3Bthis.observe(%22px%22%2CeditBreakpoint.bind(this)%2C%7Binit%3A!1%7D)%7D%2Chelpers%3A%7B%7D%2Cmethods%3A%7B%7D%2Ccomputed%3A%7BhasMin%3Afunction(e)%7Breturn!!e.min%7D%2ChasMax%3Afunction(e)%7Breturn!!e.max%7D%2CmaxPx%3Afunction(e%2Ct%2Cn)%7Breturn%20e%26%26t%3Fn-1%3An%7D%2CminWidth%3Afunction(e%2Ct%2Cn)%7Breturn!!t.min%26%26%22%22%2B(%22em%22%3D%3D%3Dt.min.unit%3FpxToEm(n%2Ce)%3Ae)%2Bt.min.unit%7D%2CmaxWidth%3Afunction(e%2Ct%2Cn)%7Breturn!!t.max%26%26%22%22%2B(%22em%22%3D%3D%3Dt.max.unit%3FpxToEm(n%2Ce)%3Ae)%2Bt.max.unit%7D%7D%7D%7D()%3Bn.i(i.m)(Breakpoint.prototype%2Cr.methods%2Ci.n)%2CBreakpoint.prototype._set%3Dfunction(e)%7Bvar%20t%3Dthis._state%3Bthis._state%3Dn.i(i.m)(%7B%7D%2Ct%2Ce)%2Crecompute(this._state%2Ce%2Ct%2C!1)%2Cn.i(i.o)(this%2Cthis._observers.pre%2Ce%2Ct)%2Cthis._fragment.update(e%2Cthis._state)%2Cn.i(i.o)(this%2Cthis._observers.post%2Ce%2Ct)%7D%2CBreakpoint.prototype.teardown%3DBreakpoint.prototype.destroy%3Dfunction(e)%7Bthis.fire(%22destroy%22)%2C!1!%3D%3De%26%26this._fragment.unmount()%2Cthis._fragment.destroy()%2Cthis._fragment%3Dnull%2Cthis._state%3D%7B%7D%2Cthis._torndown%3D!0%7D%2Ct.a%3DBreakpoint%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bfunction%20add_css()%7Bvar%20e%3Dn.i(i.a)(%22style%22)%3Be.id%3D%22svelte-2840339096-style%22%2Ce.textContent%3D%22%5Cn%5Bsvelte-2840339096%5D.emsize%2C%20%5Bsvelte-2840339096%5D%20.emsize%20%7B%5Cn%5Ctposition%3A%20absolute%3B%5Cn%5Ctvisibility%3A%20hidden%3B%5Cn%5Ctwidth%3A%201em%3B%5Cn%5Ctfont-size%3A%201em%3B%5Cn%5Ctpadding%3A%200%3B%5Cn%7D%5Cn%22%2Cn.i(i.b)(e%2Cdocument.head)%7Dfunction%20create_main_fragment(e%2Ct)%7Bvar%20r%3Breturn%7Bcreate%3Afunction()%7Br%3Dn.i(i.a)(%22span%22)%2Cthis.hydrate()%7D%2Chydrate%3Afunction(e)%7Bn.i(i.f)(r%2C%22svelte-2840339096%22%2C%22%22)%2Cr.className%3D%22emsize%22%7D%2Cmount%3Afunction(e%2Ca)%7Bn.i(i.h)(r%2Ce%2Ca)%2Ct.refs.element%3Dr%7D%2Cunmount%3Afunction()%7Bn.i(i.i)(r)%2Ct.refs.element%3D%3D%3Dr%26%26(t.refs.element%3Dnull)%7D%2Cdestroy%3Ai.p%7D%7Dfunction%20Em(e)%7Be%3De%7C%7C%7B%7D%2Cthis.refs%3D%7B%7D%2Cthis._state%3De.data%7C%7C%7B%7D%2Cthis._observers%3D%7Bpre%3AObject.create(null)%2Cpost%3AObject.create(null)%7D%2Cthis._handlers%3DObject.create(null)%2Cthis._root%3De._root%7C%7Cthis%2Cthis._yield%3De._yield%2Cthis._torndown%3D!1%2Cdocument.getElementById(%22svelte-2840339096-style%22)%7C%7Cadd_css()%2Cthis._fragment%3Dcreate_main_fragment(this._state%2Cthis)%2Ce.target%26%26(this._fragment.create()%2Cthis._fragment.mount(e.target%2Cnull))%2Ce._root%3Fe._root._oncreate.push(r.oncreate.bind(this))%3Ar.oncreate.call(this)%7Dvar%20i%3Dn(0)%2Cr%3Dfunction()%7Breturn%7Boncreate%3Afunction()%7Bthis.set(%7Bsize%3Athis.refs.element.clientWidth%7D)%7D%7D%7D()%3Bn.i(i.m)(Em.prototype%2Ci.n)%2CEm.prototype._set%3Dfunction(e)%7Bvar%20t%3Dthis._state%3Bthis._state%3Dn.i(i.m)(%7B%7D%2Ct%2Ce)%2Cn.i(i.o)(this%2Cthis._observers.pre%2Ce%2Ct)%2Cn.i(i.o)(this%2Cthis._observers.post%2Ce%2Ct)%7D%2CEm.prototype.teardown%3DEm.prototype.destroy%3Dfunction(e)%7Bthis.fire(%22destroy%22)%2C!1!%3D%3De%26%26this._fragment.unmount()%2Cthis._fragment.destroy()%2Cthis._fragment%3Dnull%2Cthis._state%3D%7B%7D%2Cthis._torndown%3D!0%7D%2Ct.a%3DEm%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bfunction%20add_css()%7Bvar%20e%3Dn.i(s.a)(%22style%22)%3Be.id%3D%22svelte-4159612888-style%22%2Ce.textContent%3D%22%5Cn%5Cn%5Ct%5Bsvelte-4159612888%5D.iframe-wrapper%2C%20%5Bsvelte-4159612888%5D%20.iframe-wrapper%20%7B%5Cn%5Ct%5Ctmargin%3A%201rem%20auto%3B%5Cn%5Ct%5Ctheight%3A%2040vh%3B%5Cn%5Ct%5Ctoutline%3A%201px%20solid%20%23aaa%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-4159612888%5D.iframe%2C%20%5Bsvelte-4159612888%5D%20.iframe%20%7B%5Cn%5Ct%5Ctwidth%3A%20100%25%3B%5Cn%5Ct%5Ctheight%3A%20100%25%3B%5Cn%5Ct%5Ctborder%3A%20none%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%5Bsvelte-4159612888%5D.resizer%2C%20%5Bsvelte-4159612888%5D%20.resizer%20%7B%5Cn%5Ct%5Ctwidth%3A%20100%25%3B%5Cn%5Ct%5Ctmargin%3A%200%3B%5Cn%5Ct%7D%5Cn%5Cn%22%2Cn.i(s.b)(e%2Cdocument.head)%7Dfunction%20create_main_fragment(e%2Ct)%7Bfunction%20onwindowresize(e)%7Bt.set(%7BviewportWidth%3Athis.innerWidth%7D)%7Dfunction%20input_input_handler()%7BP%3D!0%2Ct._set(%7BiframeWidth%3An.i(s.d)(v.value)%7D)%2CP%3D!1%7Dfunction%20input_1_input_handler()%7BO%3D!0%2Ct._set(%7BiframeWidth%3An.i(s.d)(y.value)%7D)%2CO%3D!1%7Dvar%20i%2Cr%2Co%2Cu%2Cc%2Cd%2Cl%2Cm%2Cf%2Ch%2Cp%2C_%2Cb%2Cx%2Cv%2Cg%2Cy%2Ck%2Cw%2CM%2CW%2Cz%2CE%3D!1%2CP%3D!1%2CO%3D!1%3Bwindow.addEventListener(%22resize%22%2Conwindowresize)%3Bvar%20T%3D%7B%7D%3B%22emsize%22in%20e%26%26(T.size%3De.emsize)%3Bvar%20N%3Dnew%20a.a(%7B_root%3At._root%2Cdata%3AT%7D)%3Bt._bindings.push(function()%7BN._torndown%7C%7CN.observe(%22size%22%2Cfunction(e)%7BE%7C%7C(E%3D!0%2Ct._set(%7Bemsize%3Ae%7D)%2CE%3D!1)%7D%2C%7Binit%3An.i(s.c)(N.get(%22size%22)%2Ce.emsize)%7D)%7D)%2CN._context%3D%7Bstate%3Ae%7D%3Bfor(var%20L%3De.breakpoints%2Cj%3D%5B%5D%2Cq%3D0%3Bq%3CL.length%3Bq%2B%3D1)j%5Bq%5D%3Dcreate_each_block(e%2CL%2CL%5Bq%5D%2Cq%2Ct)%3Breturn%7Bcreate%3Afunction()%7Bi%3Dn.i(s.e)(%22%5Cn%5Cn%22)%2CN._fragment.create()%2Cr%3Dn.i(s.e)(%22%5Cn%5Cn%22)%2Co%3Dn.i(s.a)(%22div%22)%2Cu%3Dn.i(s.a)(%22style%22)%2Cc%3Dn.i(s.e)(%22body%20%7Bmargin%3A%200%7D%22)%2Cd%3Dn.i(s.e)(%22%5Cn%5Ct%22)%3Bfor(var%20e%3D0%3Be%3Cj.length%3Be%2B%3D1)j%5Be%5D.create()%3Bl%3Dn.i(s.e)(%22%5Cn%5Cn%22)%2Cm%3Dn.i(s.a)(%22div%22)%2Ch%3Dn.i(s.a)(%22iframe%22)%2Cp%3Dn.i(s.e)(%22%5Cn%22)%2C_%3Dn.i(s.a)(%22label%22)%2Cb%3Dn.i(s.e)(%22Viewport%20width%22)%2Cx%3Dn.i(s.e)(%22%20%22)%2Cv%3Dn.i(s.a)(%22input%22)%2Cg%3Dn.i(s.e)(%22%5Cn%22)%2Cy%3Dn.i(s.a)(%22input%22)%2Cw%3Dn.i(s.e)(%22%5Cn%5Cn%22)%2CM%3Dn.i(s.a)(%22div%22)%2Cz%3Dn.i(s.a)(%22iframe%22)%2Cthis.hydrate()%7D%2Chydrate%3Afunction(t)%7Bn.i(s.f)(o%2C%22svelte-4159612888%22%2C%22%22)%2Co.id%3D%22breakpoints%22%2Cu.type%3D%22text%2Fcss%22%2Cn.i(s.f)(m%2C%22svelte-4159612888%22%2C%22%22)%2Cm.className%3D%22iframe-wrapper%22%2Cm.style.cssText%3Df%3D%22width%3A%20%22%2Be.iframeWidth%2B%22px%22%2Ch.className%3D%22iframe%22%2Ch.src%3D%22%3F%22%2Cn.i(s.f)(_%2C%22svelte-4159612888%22%2C%22%22)%2C_.htmlFor%3D%22resizer%22%2Cn.i(s.f)(v%2C%22svelte-4159612888%22%2C%22%22)%2Cv.type%3D%22number%22%2Cn.i(s.g)(v%2C%22input%22%2Cinput_input_handler)%2Cn.i(s.f)(y%2C%22svelte-4159612888%22%2C%22%22)%2Cy.id%3D%22resizer%22%2Cy.className%3D%22resizer%22%2Cy.type%3D%22range%22%2Cy.min%3D%220%22%2Cy.max%3Dk%3De.viewportWidth%2Cy.step%3D%221%22%2Cn.i(s.g)(y%2C%22input%22%2Cinput_1_input_handler)%2Cn.i(s.f)(M%2C%22svelte-4159612888%22%2C%22%22)%2CM.className%3D%22iframe-wrapper%22%2CM.style.cssText%3DW%3D%22width%3A%20calc(%22%2Be.iframeWidth%2B%22px%20-%201px)%22%2Cz.className%3D%22iframe%22%2Cz.src%3D%22%3F%22%7D%2Cmount%3Afunction(a%2Cf)%7Bn.i(s.h)(i%2Ca%2Cf)%2CN._fragment.mount(a%2Cf)%2Cn.i(s.h)(r%2Ca%2Cf)%2Cn.i(s.h)(o%2Ca%2Cf)%2Cn.i(s.b)(u%2Co)%2Cn.i(s.b)(c%2Cu)%2Cn.i(s.b)(d%2Co)%3Bfor(var%20k%3D0%3Bk%3Cj.length%3Bk%2B%3D1)j%5Bk%5D.mount(o%2Cnull)%3Bn.i(s.h)(l%2Ca%2Cf)%2Cn.i(s.h)(m%2Ca%2Cf)%2Ct.refs.upperIframeWrap%3Dm%2Cn.i(s.b)(h%2Cm)%2Ct.refs.upperIframe%3Dh%2Cn.i(s.h)(p%2Ca%2Cf)%2Cn.i(s.h)(_%2Ca%2Cf)%2Cn.i(s.b)(b%2C_)%2Cn.i(s.h)(x%2Ca%2Cf)%2Cn.i(s.h)(v%2Ca%2Cf)%2Cv.value%3De.iframeWidth%2Cn.i(s.h)(g%2Ca%2Cf)%2Cn.i(s.h)(y%2Ca%2Cf)%2Ct.refs.resizer%3Dy%2Cy.value%3De.iframeWidth%2Cn.i(s.h)(w%2Ca%2Cf)%2Cn.i(s.h)(M%2Ca%2Cf)%2Ct.refs.lowerIframeWrap%3DM%2Cn.i(s.b)(z%2CM)%2Ct.refs.lowerIframe%3Dz%7D%2Cupdate%3Afunction(e%2Cn)%7B!E%26%26%22emsize%22in%20e%26%26(E%3D!0%2CN._set(%7Bsize%3An.emsize%7D)%2CE%3D!1)%2CN._context.state%3Dn%3Bvar%20i%3Dn.breakpoints%3Bif(%22breakpoints%22in%20e%7C%7C%22selected%22in%20e%7C%7C%22viewportWidth%22in%20e)%7Bfor(var%20r%3D0%3Br%3Ci.length%3Br%2B%3D1)j%5Br%5D%3Fj%5Br%5D.update(e%2Cn%2Ci%2Ci%5Br%5D%2Cr)%3A(j%5Br%5D%3Dcreate_each_block(n%2Ci%2Ci%5Br%5D%2Cr%2Ct)%2Cj%5Br%5D.create()%2Cj%5Br%5D.mount(o%2Cnull))%3Bfor(%3Br%3Cj.length%3Br%2B%3D1)j%5Br%5D.unmount()%2Cj%5Br%5D.destroy()%3Bj.length%3Di.length%7Df!%3D%3D(f%3D%22width%3A%20%22%2Bn.iframeWidth%2B%22px%22)%26%26(m.style.cssText%3Df)%2CP%7C%7C(v.value%3Dn.iframeWidth)%2Ck!%3D%3D(k%3Dn.viewportWidth)%26%26(y.max%3Dk)%2CO%7C%7C(y.value%3Dn.iframeWidth)%2CW!%3D%3D(W%3D%22width%3A%20calc(%22%2Bn.iframeWidth%2B%22px%20-%201px)%22)%26%26(M.style.cssText%3DW)%7D%2Cunmount%3Afunction()%7Bn.i(s.i)(i)%2CN._fragment.unmount()%2Cn.i(s.i)(r)%2Cn.i(s.i)(o)%3Bfor(var%20e%3D0%3Be%3Cj.length%3Be%2B%3D1)j%5Be%5D.unmount()%3Bn.i(s.i)(l)%2Cn.i(s.i)(m)%2Ct.refs.upperIframeWrap%3D%3D%3Dm%26%26(t.refs.upperIframeWrap%3Dnull)%2Ct.refs.upperIframe%3D%3D%3Dh%26%26(t.refs.upperIframe%3Dnull)%2Cn.i(s.i)(p)%2Cn.i(s.i)(_)%2Cn.i(s.i)(x)%2Cn.i(s.i)(v)%2Cn.i(s.i)(g)%2Cn.i(s.i)(y)%2Ct.refs.resizer%3D%3D%3Dy%26%26(t.refs.resizer%3Dnull)%2Cn.i(s.i)(w)%2Cn.i(s.i)(M)%2Ct.refs.lowerIframeWrap%3D%3D%3DM%26%26(t.refs.lowerIframeWrap%3Dnull)%2Ct.refs.lowerIframe%3D%3D%3Dz%26%26(t.refs.lowerIframe%3Dnull)%7D%2Cdestroy%3Afunction()%7Bwindow.removeEventListener(%22resize%22%2Conwindowresize)%2CN.destroy(!1)%2Cn.i(s.j)(j%2C!1%2C0)%2Cn.i(s.k)(v%2C%22input%22%2Cinput_input_handler)%2Cn.i(s.k)(y%2C%22input%22%2Cinput_1_input_handler)%7D%7D%7Dfunction%20create_each_block(e%2Ct%2Cn%2Ci%2Cr)%7Bvar%20a%3Dnew%20o.a(%7B_root%3Ar._root%2Cdata%3A%7Bindex%3Ai%2Cboundary%3An%2CisSelected%3An%3D%3D%3De.selected%2CviewportWidth%3Ae.viewportWidth%7D%7D)%3Breturn%20a.on(%22select%22%2Cfunction(e)%7Bvar%20t%3Dthis._context.each_block_value%2Cn%3Dthis._context.index%2Ci%3Dt%5Bn%5D%3Br.selectBreakpoint(i%2Ce)%7D)%2Ca.on(%22edit%22%2Cfunction(e)%7Br.editIframwWidth(e.pixelWidth)%7D)%2Ca._context%3D%7Beach_block_value%3At%2Cindex%3Ai%7D%2C%7Bcreate%3Afunction()%7Ba._fragment.create()%7D%2Cmount%3Afunction(e%2Ct)%7Ba._fragment.mount(e%2Ct)%7D%2Cupdate%3Afunction(e%2Ct%2Cn%2Ci%2Cr)%7Ba._context.each_block_value%3Dn%2Ca._context.index%3Dr%3Bvar%20o%3D%7B%7D%3Bo.index%3Dr%2C%22breakpoints%22in%20e%26%26(o.boundary%3Di)%2C(%22breakpoints%22in%20e%7C%7C%22selected%22in%20e)%26%26(o.isSelected%3Di%3D%3D%3Dt.selected)%2C%22viewportWidth%22in%20e%26%26(o.viewportWidth%3Dt.viewportWidth)%2CObject.keys(o).length%26%26a.set(o)%7D%2Cunmount%3Afunction()%7Ba._fragment.unmount()%7D%2Cdestroy%3Afunction()%7Ba.destroy(!1)%7D%7D%7Dfunction%20Squizbox(e)%7Be%3De%7C%7C%7B%7D%2Cthis.refs%3D%7B%7D%2Cthis._state%3De.data%7C%7C%7B%7D%2Cthis._state.viewportWidth%3Dwindow.innerWidth%2Cthis._observers%3D%7Bpre%3AObject.create(null)%2Cpost%3AObject.create(null)%7D%2Cthis._handlers%3DObject.create(null)%2Cthis._root%3De._root%7C%7Cthis%2Cthis._yield%3De._yield%2Cthis._torndown%3D!1%2Cdocument.getElementById(%22svelte-4159612888-style%22)%7C%7Cadd_css()%2Cthis._oncreate%3D%5B%5D%2Cthis._bindings%3D%5B%5D%2Cthis._fragment%3Dcreate_main_fragment(this._state%2Cthis)%2Ce.target%26%26(this._fragment.create()%2Cthis._fragment.mount(e.target%2Cnull))%2Cn.i(s.l)(this._oncreate)%2Cn.i(s.l)(this._bindings)%2Ce._root%3Fe._root._oncreate.push(u.oncreate.bind(this))%3Au.oncreate.call(this)%7Dvar%20i%3Dn(7)%2Cr%3Dn(6)%2Ca%3Dn(4)%2Co%3Dn(3)%2Cs%3Dn(0)%2Cu%3Dfunction()%7Bfunction%20maxOrMin(e)%7Breturn%20e.min%7C%7Ce.max%7Dfunction%20emToPx(e%2Ct)%7Breturn%20t*e%7Dfunction%20toPx(e%2Ct%2Cn)%7Breturn%22px%22%3D%3D%3Dn%3Ft%3AemToPx(e%2Ct)%7Dfunction%20pxConverter(e%2Ct)%7Breturn%20console.log(%22pxConverter%20pixelsPerEm%22%2Ce)%2Cconsole.log(%22pxConverter%20function%22%2Ct)%2Cfunction(n%2Ci)%7Breturn%20t(e%2Cn%2Ci)%7D%7Dvar%20e%3Dfunction(e%2Ct)%7Breturn%20e.concat(t)%7D%3Breturn%7Boncreate%3Afunction()%7Bvar%20e%3Dthis.refs.upperIframe%2Ct%3Dthis.refs.lowerIframe%2Cn%3D%5Bnew%20Promise(function(t%2Cn)%7Be.addEventListener(%22load%22%2Ct.bind(null%2Ce)%2C!1)%7D)%2Cnew%20Promise(function(e%2Cn)%7Bt.addEventListener(%22load%22%2Ce.bind(null%2Ct)%2C!1)%7D)%5D%3BPromise.all(n).then(this.loaded.bind(this))%7D%2Chelpers%3A%7BmaxOrMin%3AmaxOrMin%7D%2Cmethods%3A%7Bloaded%3Afunction(t)%7Bvar%20a%3Dt.map(i.a).reduce(e)%3Bthis.set(%7Bbreakpoints%3An.i(r.a)(a%2CpxConverter(this.get(%22emsize%22)%2CtoPx))%7D)%7D%2CselectBreakpoint%3Afunction(e%2Ct)%7Bconsole.log(%22selectBreakpoint%20boundary%22%2Ce)%2Cconsole.log(%22selectBreakpoint%20event%22%2Ct)%3Bvar%20n%3Dt.px%3B(e.min%7C%7Ce.max).unit%3Bthis.set(%7BiframeWidth%3An%2Cselected%3Ae%7D)%7D%2CeditIframwWidth%3Afunction(e)%7Bconsole.log(%22pixelWidth%22%2Ce)%2Cthis.set(%7BiframeWidth%3Ae%7D)%7D%7D%7D%7D()%3Bn.i(s.m)(Squizbox.prototype%2Cu.methods%2Cs.n)%2CSquizbox.prototype._set%3Dfunction(e)%7Bvar%20t%3Dthis._state%3Bthis._state%3Dn.i(s.m)(%7B%7D%2Ct%2Ce)%2Cn.i(s.o)(this%2Cthis._observers.pre%2Ce%2Ct)%2Cthis._fragment.update(e%2Cthis._state)%2Cn.i(s.o)(this%2Cthis._observers.post%2Ce%2Ct)%2Cn.i(s.l)(this._oncreate)%2Cn.i(s.l)(this._bindings)%7D%2CSquizbox.prototype.teardown%3DSquizbox.prototype.destroy%3Dfunction(e)%7Bthis.fire(%22destroy%22)%2C!1!%3D%3De%26%26this._fragment.unmount()%2Cthis._fragment.destroy()%2Cthis._fragment%3Dnull%2Cthis._state%3D%7B%7D%2Cthis._torndown%3D!0%7D%2Ct.a%3DSquizbox%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bfunction%20_defineProperty(e%2Ct%2Cn)%7Breturn%20t%20in%20e%3FObject.defineProperty(e%2Ct%2C%7Bvalue%3An%2Cenumerable%3A!0%2Cconfigurable%3A!0%2Cwritable%3A!0%7D)%3Ae%5Bt%5D%3Dn%2Ce%7Dvar%20i%3Dn(1)%2Cr%3Dn(10)%2Ca%3Dn(9)%2Co%3D%2F((min-%7Cmax-)width%5Cs*%3A%5Cs*)(%5Cd%2B%5C.%3F%5Cd*%3F)(px%7Cem%7Crem)%2Fgi%2Cs%3Dfunction(e)%7Breturn%20e.href%26%26%22http%22%3D%3D%3De.href.substr(0%2C4)%7D%2Cu%3Dfunction(e)%7Btry%7Breturn%20e.cssRules%2C!0%7Dcatch(e)%7Bif(%22SecurityError%22!%3D%3De.name)throw%20e%3Breturn!1%7D%7D%2Cc%3Dfunction(e)%7Breturn!(!e.media%7C%7C!e.media.length)%7D%2Cd%3Dfunction(e)%7Breturn%5B%5D.slice.call(e)%7D%2Cl%3Dfunction(e)%7Breturn%20d(e.cssRules)%7D%2Cm%3Dfunction(e%2Ct)%7Breturn%20e.concat(t)%7D%2Cf%3Dfunction(e)%7Breturn%20e.media%7D%2Ch%3Dfunction(e)%7Breturn%20Object.getOwnPropertyNames(e).map(function(t)%7Breturn%20e%5Bt%5D%7D)%7D%3Bt.a%3Dfunction(e%2Ct)%7Bvar%20d%3De.filter(s).filter(u).map(l).reduce(m).filter(c).map(f)%3Bconsole.log(%22MediaLists%22%2Cd)%3Bvar%20p%3Dd.map(function(e)%7Breturn%7BMediaLists%3A%5Be%5D%2CwidthRules%3Ae.mediaText.match(o)%7D%7D).reduce(function(e%2Ct)%7Breturn%20e.concat(t.widthRules.map(function(e)%7Breturn%20Object.assign(n.i(i.a)(e)%2C%7BwidthRule%3Ae%2CMediaLists%3At.MediaLists%7D)%7D))%7D%2C%5B%5D).map(function(e)%7Breturn%20Object.assign(%7Bpixels%3At(e.value%2Ce.unit)%7D%2Ce)%7D).reduce(function(e%2Ct)%7Breturn%20e%5Bt.widthRule%5D%3F(e%5Bt.widthRule%5D.MediaLists%3De%5Bt.widthRule%5D.MediaLists.concat(t.MediaLists)%2Ce)%3AObject.assign(e%2C_defineProperty(%7B%7D%2Ct.widthRule%2Ct))%7D%2C%7B%7D)%3Breturn%20h(p).sort(r.a).reduce(a.a%2C%5B%5D)%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bt.a%3Dfunction(e)%7Breturn%5B%5D.slice.call(e.contentDocument.styleSheets)%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bt.a%3Dfunction(e%2Ct)%7Breturn%20e%3D%3Dt%7C%7Ce%3Ct%26%26e%2B1%3E%3Dt%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bvar%20i%3Dn(8)%3Bt.a%3Dfunction(e%2Ct)%7Breturn%22max%22%3D%3D%3Dt.minMax%3Fe.concat(%7Bmax%3At%2Cpixels%3At.pixels%7D)%3Ae.filter(function(e)%7Breturn%20n.i(i.a)(e.pixels%2Ct.pixels)%7D).length%3Fe.map(function(e)%7Breturn%20n.i(i.a)(e.pixels%2Ct.pixels)%3FObject.assign(%7Bmin%3At%7D%2Ce)%3Ae%7D)%3Ae.concat(%7Bmin%3At%2Cpixels%3At.pixels%7D)%7D%7D%2Cfunction(e%2Ct%2Cn)%7B%22use%20strict%22%3Bt.a%3Dfunction(e%2Ct)%7Bif(e.pixels%3Ct.pixels)return-1%3Bif(e.pixels%3Et.pixels)return%201%3Bif(e.pixels%3D%3D%3Dt.pixels)%7Bif(%22max%22%3D%3D%3De.minMax%26%26%22min%22%3D%3D%3Dt.minMax)return-1%3Bif(%22min%22%3D%3D%3De.minMax%26%26%22max%22%3D%3D%3Dt.minMax)return%201%7Dreturn%20console.warn(%22Unmerged%20breakpoints%22%2Ce%2Ct)%2C0%7D%7D%2Cfunction(e%2Ct%2Cn)%7Be.exports%3Dn(2)%7D%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D)() })()">squizbox</a>

(If you don’t see a link above try visiting [the project site](https://ollicle.github.io/squizbox/))

Click the bookmarklet to inspect and edit @media min-width and max-width breakpoints used in the CSS of the current page.

### Limitations

- Only reads CSS files loaded from the same domain as the page itself

- Bookmarklets cannot be run on pages with a Content Security Policy (CSP) that disallows inline scripts. For example [GitHub Content Security Policy](https://github.com/blog/1477-content-security-policy)

- Only tested (and proved buggy in Firefox)


## Development test set-up

Beyond setting up the command line scripts as npm scripts, I’ve done very little to ensure the dev set-up runs anywhere but my Mac. Disclaimers aside, the mostly manual testing set-up uses Selenium to open a url in a Firefox window – saving several clicks by injecting the bookmarklet into the page automagically.

1. Install dependencies

	Navigate to the project directory in your terminal and fetch dependencies from npm

		npm i

2. Install selenium

		npm run selenium-install

3. Bundle script and start watcher

		npm start

4. Start webserver

	In a new console

		npm run serve

5. Start selenium server

	In another new console

		npm run selenium-start

6. Serve test page

	In another new console

		npm run serve-test

7. Run manual test script

	In a fourth console

		npm run test -- "http://localhost:5555/"

	- Firefox browser window opens,
	- loading the test page,
	- bookmarklet code is injected and executed

### Distribution build

Presuming dependencies are installed. The `dist` script builds and embeds the bookmarklet code into this README

	npm run dist

## Todo

- bug fixes
- window resizing in a mode that deselects selected breakpoints
- easy access to edited values (before and after perhaps)
- remove console logging from dist build somehow
- add visible version
- UI design

## Wishes

- reload re-generated build within initial selenium session

## Editing this document

This README is generated from [template.md](src/template.md)
