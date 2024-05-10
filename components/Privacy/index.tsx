"use client"
import Image from "next/image";
import treemarketIcon from "@/public/images/landing/treemarket-icon.png"

const Hero = () =>{
    return(
        <div className="hero relative w-full bg-gray-100 z-10">
        <a href="https://tree.market">
          <div className="backto flex items-center justify-start gap-3 font-normal pl-2 pt-2">
            <Image alt="" src={treemarketIcon} className="w-[24px] md:w-[24px]" />
            <p className="underline text-sm md:text-base">Visit Tree.Market</p>
          </div>
        </a>
        <div className="hero-content relative grid grid-flow-row gap-4 justify-between items-center mx-auto w-11/12 lg:w-[991px] py-24 lg:py-36 space-y-12 lg:space-y-14 2xl:space-y-16">
            <div className="title text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl space-y-1 lg:space-y-2 2xl:space-y-3">
              <h1 className="font-normal">
                Tree.Market
              </h1>
              <h2 className="font-bold">
                Privacy Policy
              </h2>
            </div>{/* <!-- title --> */}
            <div className="logo w-[88px] lg:w-[100px] 2xl:w-[120px] mx-auto">
              <Image alt="" src={treemarketIcon} />
            </div>
            <div className="speech w-11/12 mx-auto space-y-6 lg:space-y-8 text-xl lg:text-xl leading-7 font-['Rasa']">
            <p className="font-normal">
                Last updated: March, 2024
              </p>
              <p className="font-normal">
                This Privacy Policy (referred to as Policy) describes how Tree.Market (referred to as Tree.Market, we, us, or our) collects and uses the personal information of data subjects. It also describes the choices available to you regarding the use of, your access to, and how to update and correct your personal information.
              </p>
              <p className="font-normal">
                We refer to our offerings, together with the Services and websites as the Services in this policy.
              </p>
              <p className="font-normal">
                We respect your privacy. We do not sell your information to any other parties. The information you share with us is shared with third parties and as described in this document in order to perform the services provided.
              </p>
              <h3 className="font-sans">PURPOSE OF THIS POLICY</h3>
              <p className="font-normal">
                This Policy describes how Tree.Market collects and uses the personal information you provide to us, any personal information that we might collect from you as part of your using the Services and in other situations, as well as the purposes for which we process your personal information. This Policy also sets out your rights in respect of our processing of your personal information.
              </p>
              <p className="font-normal">
                For the purposes of this Policy, the terms Visitor, Member, user, you, and your should be understood to mean any individual providing personal information to us via the Services or otherwise, excluding all Tree.Market employees, directors, and volunteers.
                BY USING OR ACCESSING THE SERVICES, YOU SIGNIFY YOUR AGREEMENT TO BE BOUND BY OUR PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, YOU MAY NOT ACCESS OR OTHERWISE USE THE SERVICES.
              </p>
              <h3 className="font-sans">WHEN WE COLLECT INFORMATION ABOUT YOU</h3>
              <p className="font-normal">
                We collect information about you when you provide it to us, when you use our Services, and when other sources provide it to us, as further described below:
              </p>
              <ul className=" list-disc pl-6">
                <li><u>Information you provide to us:</u> We collect information about you when you input it into the Services or otherwise provide it directly to us.</li>
                <li><u>Account and profile information:</u> We collect information about you when you register for an account, create or modify your profile, set preferences, and sign-up for or pay dues through the Services.</li>
                <li><u>Content you provide through the Services:</u> We collect content that you submit to the Services owned or operated by us when you choose to submit online forms or when you participate in any interactive features, surveys, promotions, activities, or events.</li>
                <li><u>Information you provide through our support channels:</u> We collect information regarding a problem you are experiencing with the Services when you choose to submit information to our Member support.</li>
                <li><u>Transaction Information:</u> We collect certain transaction information when you register for certain paid Services.</li>
                <li><u>Information we collect automatically when you use the Services:</u> We collect information about you when you use our Services, including browsing our websites and taking certain actions within the Services.</li>
                <li><u>Your use of the Services:</u> We keep track of certain information about you when you visit and interact with any of our Services.</li>
              </ul>
              <h3 className="font-sans">WHAT INFORMATION WE COLLECT ABOUT YOU</h3>
              <p className="font-normal">
                We may collect the following personal information from you:
              </p>
              <ul className=" list-disc pl-6">
                <li>Contact information such as name, email address, and information you input into online forms that allow us to perform our contract with you under applicable terms of service.</li>
                <li>Content information about you that you may choose to include. Examples of content we collect and store include your viewed content and training interactions. Content also includes the files and links you upload to the Services.</li>
                <li>Contact information, a summary of the problem you are experiencing, and any other documentation, screenshots, or information that would be helpful in resolving an issue submitted to our Member support included in the Services.</li>
                <li>Information about you when you visit and interact with any of our Services. This information includes the features you use; and the links you click on.</li>
                <li>Device information, including your connection type and settings, information about your operating system, browser type, Internet Protocol (IP) address, URLs of referring/exit pages, device identifiers, and crash data.</li>
                <li>Any additional information you may submit to us.</li>
              </ul>
              <h3 className="font-sans">PURPOSES AND LEGAL BASIS FOR WHICH WE COLLECT PERSONAL INFORMATION</h3>
              <p className="font-normal">
                We collect and process personal information for a variety of purposes, including:
              </p>
              <div>
                <p className="font-normal">
                  <u>Purposes</u>
                </p>
                <ul className=" list-disc pl-6">
                  <li>Sending you an order confirmation</li>
                  <li>Administering your account</li>
                  <li>Carrying out requests made by you to us</li>
                  <li>Providing the Services and personalizing your experience</li>
                  <li>Responding to Member service requests</li>
                </ul>
              </div>
              <div>
                <p className="font-normal">
                  <u>Legal Basis</u>
                </p>
                <p className="pl-6">
                  The processing of your personal data is necessary to perform our contract with you under applicable terms of service. Where we have not entered into a contract with you, we base the processing of your personal data on our legitimate interest to operate and administer our Services and to provide you with the content you access and request.
                </p>
              </div>
    
              <div>
                <p className="font-normal">
                  <u>Purposes</u>
                </p>
                <ul className="list-disc pl-6">
                  <li>Communicating with you about the Services</li>
                  <li>Communicating with you about employment and volunteer opportunities</li>
                  <li>Displaying content based upon your interests</li>
                  <li>Sending you a newsletter</li>
                  <li>Sending you promotional communications</li>
                </ul>
              </div>
              <div>
                <p className="font-normal">
                  <u>Legal Basis</u>
                </p>
                <p className="pl-6">
                  We base the processing of your personal data on our legitimate interest in conducting promotions or to the extent that you have provided your prior consent.
                </p>
              </div>
    
              <div>
                <p className="font-normal">
                  <u>Purposes</u>
                </p>
                <ul className="list-disc pl-6">
                  <li>For research and development, to troubleshoot, and to identify trends, usage, activity patterns, and areas for integration and improvement of the Services.</li>
                </ul>
              </div>
              <div>
                <p className="font-normal">
                  <u>Legal Basis</u>
                </p>
                <p className="pl-6">
                  We base the processing of your personal data on our legitimate interest in developing and improving the service offering, or where we seek your valid consent.
                </p>
              </div>
    
              <div>
                <p className="font-normal">
                  <u>Purposes</u>
                </p>
                <ul className="list-disc pl-6">
                  <li>For Member support to resolve technical issues, to respond to requests for assistance, to analyze crash information, and to repair and improve the Services.</li>
                </ul>
              </div>
              <div>
                <p className="font-normal">
                  <u>Legal Basis</u>
                </p>
                <p className="pl-6">
                  We process your personal data to perform our contract with you under applicable terms of service and to the extent it is necessary for our legitimate interest in fulfilling your requests and communicating with you.
                </p>
              </div>
    
              <div>
                <p className="font-normal">
                  <u>Purposes</u>
                </p>
                <ul className="list-disc pl-6">
                  <li>For safety and security and to verify accounts and activity, settle disputes, monitor suspicious or fraudulent activity, and identify policy violations.</li>
                </ul>
              </div>
              <div>
                <p className="font-normal">
                  <u>Legal Basis</u>
                </p>
                <p className="pl-6">
                  We process your personal data to the extent it is necessary for our legitimate interest in promoting the safety and security of the Services and in protecting our rights and the rights of others.
                </p>
              </div>
    
              <h3 className="font-sans">LEGAL</h3>
              <p className="font-normal">
                We may share your personal information with affiliates, agents, service providers, partners, or contractors for the following purposes: (a) receiving assistance in processing transactions; (b) fulfilling requests for information, receiving and sending communications, updating promotional lists, and analyzing data; (c) providing IT and other support services; (d) receiving assistance in other ancillary services to the operation of tasks; or (e) fulfilling our contract with you under the applicable terms of service.
              </p>
              <p className="font-normal">
                We will not sell your personal information and we will not share it with non-partner companies, agents, service providers, or contractors to use without your consent, except in connection with the sale, merger, or acquisition of Tree.Market and/or the department and/or office responsible for the applicable Services.
              </p>
              <h3 className="font-sans">OPT OUT AND UNWANTED COMMUNICATIONS</h3>
              <p className="font-normal">
                If you no longer want to receive promotional-related emails from us, you may opt out of receiving such emails by clicking the unsubscribe link at the bottom of any promotional email you receive from us. If you are having difficulty unsubscribing from our promotional emails or any other communications from us, please send a request to us at the contact information in the section entitled CONTACT DETAILS. We will process your request within a reasonable time after receipt. Please note that if you opt out in this manner, certain aspects of the Services may no longer be available to you.
              </p>
              <h3 className="font-sans">OBTAINING YOUR CONSENT</h3>
              <p className="font-normal">
                Where our use of your personal information requires your consent, you can provide such consent in the following ways:
              </p>
              <ul className="list-disc pl-6">
                <li>At the time we collect your personal information, by following the instructions provided.</li>
                <li>By informing us via e-mail or post using the contact details listed under CONTACT DETAILS.</li>
              </ul>
              <p className="font-normal">
                Please note that if you specifically consent to additional uses of your personal information, we may use your personal information in a manner consistent with that consent.
              </p>
              <h3 className="font-sans">EXERCISING YOUR RIGHTS</h3>
              <p className="font-normal">
                You have the right to amend or update inaccurate or incomplete personal information, request deletion of your personal information, or request that we no longer use your personal information. You may submit a request for access (i.e., request information on personal data collected, used, disclosed, or processed by Tree.Market), as well as a request for integration, rectification, or erasure, or object to our processing of your personal data. Upon request, Tree.Market will provide you with information about whether we hold any of your personal information. Furthermore, you may also be able to exercise the following rights to restrict processing and data portability and/or to lodge a complaint with a data protection authority.
              </p>
              <p className="font-normal">
                If you prefer that the processing of your personal data is carried out solely by means of traditional contact methods, you may object to the processing of your personal data by means of automated contact methods.
              </p>
              <p className="font-normal">
                In order to exercise your rights above and/or submit inquiries or complaints with regard to our processing of your personal data, you may send a request to Tree.Market by writing to this email address admin@tree.market. We will respond to your request within a reasonable time after receipt.
              </p>
              <h3 className="font-sans">SECURITY</h3>
              <p className="font-normal">
                The security of your information is important to us. We take reasonable and appropriate measures to protect personal data from loss, misuse, and unauthorized access, disclosure, alteration, and destruction, taking into account the risks involved in the processing and the nature of the personal data. Also see CONFIDENTIALITY AND SECURITY OF YOUR INFORMATION below.
              </p>
              <p className="font-normal">
                If you have any questions about the security of your personal information, you may contact us at admin@tree.market.
              </p>
              <h3 className="font-sans">THIRD PARTY LINKS AND SERVICES</h3>
              <p className="font-normal">
                Our Services contain links to third-party websites and services. Please remember that when you use a link from our Services to another website, or when you request a service from a third party, this Policy no longer applies.
              </p>
              <p className="font-normal">
                Your browsing and interaction on any other websites, or your dealings with any other third-party service provider, is subject to that website&apos;s or third-party service provider&apos;s own rules and policies. We do not monitor, control, or endorse the privacy practices of any third parties. The Services may integrate with social networking services. You understand that we do not control such services and are not liable for the manner in which they operate. While we may provide you with the ability to use such services in connection with our Services, we are doing so merely as an accommodation, and, like you, are relying upon those third-party services to operate properly and fairly.
              </p>
              <p className="font-normal">
                This Policy does not apply to these third-party websites and third-party service providers.
              </p>
              <h3 className="font-sans">CONFIDENTIALITY AND SECURITY OF YOUR PERSONAL INFORMATION</h3>
              <p className="font-normal">
                We are committed to keeping the personal information you provide to us secure. We take reasonable and appropriate measures to protect your personal information, including, but not limited to, sophisticated software and hardware that prevents personal information from loss; misuse; and unauthorized access, disclosure, alteration, and destruction, taking into account the risks involved in the processing and the nature of the personal information.
              </p>
              <p className="font-normal">
                Information regarding job applications is encrypted and transmitted in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for https at the beginning of the URL. Only employees or third parties who need the information to process a specific request are granted access to personally identifiable information.
              </p>
              <h3 className="font-sans">HOW LONG WE KEEP INFORMATION</h3>
              <p className="font-normal">
                How long we keep the information we collect about you depends on the type of information, as described in further detail below. After such time, we will either delete your information, or, if this is not possible (for example, because the information has been stored in backup archives), then we will securely store your information and isolate it from any further use until deletion is possible:
              </p>
              <ul className="list-disc pl-6">
                <li><u>Account information:</u> We retain your account information for as long as your account is active and a reasonable period thereafter in case you decide to re-activate the Services. We also retain some of your information as necessary to comply with our legal obligations, resolve disputes, enforce our agreements, support operations, and continue to develop and improve our Services. Where we retain information for Service improvement and development, we take steps to eliminate information that directly identifies you, and we only use the information to uncover collective insights about the use of our Services, not to specifically analyze personal characteristics about you.</li>
                <li><u>Information you share on the Services:</u> If your account is deactivated or disabled, some of your information and the content you have provided will remain in order to allow other Members to make full use of the Services.</li>
                <li><u>Promotional information:</u> If you have elected to receive promotional emails from us, we retain information about your promotional preferences for a reasonable period of time from the date you last expressed interest in our Services, such as when you last opened an email from us or ceased using your Tree.Market account. We may retain information derived from cookies and other tracking technologies for a reasonable period of time from the date such information was created.</li>
              </ul>
              <h3 className="font-sans">CHANGES TO THIS PRIVACY POLICY</h3>
              <p className="font-normal">
                We reserve the right to amend all or part of this Policy from time to time. The version published on the Services is the version currently in force. Changes to our Policy are communicated by placing a notice on the Services stating Revised Privacy Policy. Changes to our Policy will be effective immediately once published on the Services unless otherwise noted. Your use of the Services following any amendments indicates your consent to the practices described in the revised Policy. If we make any material changes, we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this website prior to the change becoming effective. We invite you to periodically review our Policy to be informed of any relevant changes, especially before providing any data to us.
              </p>
              <h3 className="font-sans">RECOURSE ENFORCEMENT AND LIABILITY</h3>
              <p className="font-normal">
                Visitor Recourse: You may file a complaint concerning our processing of your personal information. You may contact us as specified below about complaints regarding our personal information handling practices.
              </p>
              <h3 className="font-sans">CONTACT DETAILS</h3>
              <p className="font-normal">
                For questions or concerns about this Policy, or to ask questions or express concerns about our collection, management and processing of personal information, please contact us by email: admin@tree.market.
              </p>
            </div>{/* <!-- speech --> */}
        </div>{/* <!-- hero-content --> */}    
      </div>)
}
export default Hero;