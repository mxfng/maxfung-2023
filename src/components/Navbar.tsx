"use client";

import { Box, useMediaQuery, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 250;
  const [isBelowThreshold] = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const isScrollingPastThreshold = currentPosition > scrollThreshold;

      if (isScrollingPastThreshold && isBelowThreshold) {
        setScrolling(currentPosition > scrollPosition);
      } else {
        setScrolling(false);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isBelowThreshold]);

  return (
    <Box
      bg={
        isBelowThreshold
          ? "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
          : "transparent"
      }
      position="fixed"
      width="full"
      height="100px"
      p={5}
      as="header"
      zIndex={999}
      transition="transform 0.3s ease-in-out"
      transform={scrolling ? "translateY(-100%)" : "translateY(0)"}
    >
      <Center>
        {/* Navbar Contents */}
        <Box height={88} width={1300}>
          {/* Signature Logo */}
          <Box
            width="fit-content"
            transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
            _hover={{
              transform: "scale(1.09)",
            }}
          >
            <svg
              width={120}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.02 -0.02 168.4 91.47"
              stroke="var(--chakra-colors-palette-900)"
            >
              <mask id="mask">
                {/* Mask Shape */}
                <path
                  d="m 140.72592,0.97466825 c -0.1403,0.0208 -0.36102,0.12029995 -0.72708,0.30798995 -1.6463,0.84414 -2.03457,1.36116 -1.02165,1.36116 0.23798,0 0.43364,0.11533 0.43564,0.2558 0.002,0.18493 0.0476,0.17786 0.16484,-0.0264 0.0993,-0.17274 0.2571,-0.21646 0.40877,-0.11318 0.1359,0.0926 0.68593,0.15997 1.22214,0.14987 0.89735,-0.0169 0.96054,0.0119 0.78962,0.3638 -0.12995,0.26743 -0.1166,0.50414 0.0439,0.78755 0.19174,0.33828 0.27661,0.36186 0.51418,0.14211 0.30953,-0.28629 1.64569,-1.15084 1.77871,-1.15084 0.0451,0 0.0822,0.14557 0.0822,0.3235 0,0.17795 0.10402,0.28372 0.23151,0.23512 0.24584,-0.0937 0.31274,-1.86603 0.0801,-2.12235 -0.071,-0.0783 -0.92207,-0.1211 -1.89136,-0.0956 -1.40797,0.0371 -1.78337,-0.014 -1.86707,-0.25425 -0.0442,-0.12697 -0.10412,-0.18508995 -0.24443,-0.16432995 z m -4.55166,3.63595995 c -0.19562,0.003 -0.356,0.0318 -0.46818,0.0884 -0.25719,0.12947 -0.75975,0.3726 -1.11673,0.54054 -1.66986,0.78556 -1.98918,0.94061 -2.59002,1.25574 -0.35361,0.18546 -1.22358,0.81974 -1.93322,1.40973 -0.70963,0.58999 -1.36646,1.0728 -1.45986,1.0728 -0.17638,0 -0.30807,0.12168 -2.45463,2.2706598 -2.09735,2.09978 -2.44793,2.53037 -3.08612,3.7884 -0.69404,1.36821 -1.61252,2.87269 -2.4753,4.05505 -0.32801,0.44951 -0.73402,1.09328 -0.90278,1.43041 -0.45926,0.91748 -1.79653,2.96268 -3.05201,4.66896 -0.6135,0.83374 -1.24188,1.78604 -1.39682,2.11615 -0.15493,0.33012 -0.41234,0.71953 -0.57206,0.86558 -0.15971,0.14605 -0.29042,0.47314 -0.29042,0.72657 0,0.25342 -0.12835,0.57736 -0.28474,0.72037 -0.15639,0.143 -0.65729,1.12896 -1.11362,2.19057 -0.45633,1.06161 -1.08838,2.32637 -1.40405,2.81068 -0.41582,0.63797 -0.58867,1.15317 -0.62787,1.87017 -0.0645,1.17712 -0.34267,2.03023 -0.81235,2.49184 -0.66056,0.6492 -2.41716,7.05861 -2.49546,9.10487 -0.0331,0.8654 -0.49454,1.31572 -0.49454,0.48265 0,-0.4533 -0.12447,-0.51621 -1.71514,-0.86403 -0.94346,-0.20629 -1.84713,-0.49986 -2.00815,-0.65215 -0.16102,-0.15229 -0.48942,-0.27699 -0.72967,-0.27699 -0.24025,0 -0.77601,-0.17368 -1.19062,-0.38654 -0.51286,-0.26326 -1.791837,-0.50565 -3.999237,-0.75706 -4.8268,-0.54974 -7.38902,-0.45856 -8.25687,0.29352 -0.28019,0.24284 -0.61601,0.44184 -0.74621,0.44184 -0.41876,0 -3.30657,1.44047 -3.91811,1.9544 -0.32557,0.27361 -0.80953,0.49713 -1.07539,0.49713 -0.5881,0 -1.61227,-0.55951 -2.5802,-1.40973 -0.3965,-0.34831 -0.81794,-0.63356 -0.93689,-0.63356 -0.11896,0 -0.50427,-0.32693 -0.85576,-0.72709 -0.84514,-0.96208 -1.87741,-1.44148 -3.49126,-1.62005 l -1.3255,-0.14676 -0.69298,0.80563 c -1.80711,2.10107 -1.61752,1.44103 -1.70016,5.92832 -0.007,0.37682 -0.17247,0.84093 -0.38292,1.07281 -0.20399,0.22476 -0.371037,0.59076 -0.371037,0.81338 0,0.26331 -0.165107,0.45037 -0.472323,0.53537 -0.623895,0.17253 -0.723454,0.0241 -0.486275,-0.72554 0.172903,-0.5465 0.15579,-0.62321 -0.14056,-0.62321 -0.225191,0 -0.374364,0.19902 -0.446484,0.59634 -0.07879,0.43405 -0.386078,0.79964 -1.12913,1.34307 -1.176051,0.86006 -1.778875,0.88402 -1.973006,0.0791 -0.177857,-0.73761 0.23684,-2.40305 0.699182,-2.8081 0.209762,-0.18378 0.475392,-0.53677 0.590145,-0.78393 0.114745,-0.24715 0.43761,-0.56978 0.717268,-0.71727 0.28998,-0.15293 0.588259,-0.53724 0.694015,-0.89452 0.101995,-0.34457 0.402749,-0.98868 0.668693,-1.43092 0.703113,-1.1692 0.763873,-1.53608 0.382922,-2.31872 -0.261848,-0.53797 -0.533935,-0.75637 -1.214913,-0.97514 -0.808837,-0.25986 -0.923834,-0.25013 -1.469677,0.12454 -0.325731,0.22362 -0.697432,0.59569 -0.82579,0.82683 -0.128358,0.23114 -0.343142,0.42013 -0.47749,0.42013 -0.312366,0 -0.922617,0.73447 -1.307414,1.57354 -0.387269,0.84454 -0.395183,0.82305 0.274919,0.71469 0.484337,-0.0783 0.563479,-0.0325 0.506429,0.29094 -0.08549,0.48477 -1.127117,0.52916 -3.121257,0.13332 -0.764954,-0.15185 -1.724707,-0.30213 -2.132686,-0.33383 -2.85551,-0.22188 -4.185461,-0.4327 -4.913912,-0.77928 -1.016917,-0.48381 -3.042625,-0.73506 -3.230294,-0.40049 -0.07133,0.12715 -0.312415,0.23478 -0.535884,0.23978 -0.715741,0.0146 -1.546949,1.05539 -2.776575,3.47782 -0.659553,1.29939 -1.258525,2.56929 -1.331185,2.82154 -0.222002,0.77068 -1.679602,1.1041 -2.790527,0.63872 -0.449046,-0.18811 -2.491652,-2.26863 -5.366598,-5.4653 -0.631663,-0.70236 -1.228427,-1.27693 -1.326017,-1.27693 -0.09759,0 -0.508914,-0.37211 -0.914156,-0.82734 -1.518892,-1.70627 -1.675541,-1.86206 -2.154391,-2.1425 -0.269655,-0.15793 -0.753863,-0.57748 -1.075903,-0.93224 -0.574819,-0.63332 -0.611239,-0.64342 -1.985925,-0.54622 -0.770148,0.0545 -1.454251,0.18561 -1.520321,0.29145 -0.06607,0.10584 -0.388072,0.39852 -0.715718,0.65061 -0.426441,0.32809 -0.627784,0.67351 -0.708484,1.21594 -0.062,0.41677 -0.309852,1.44746 -0.550871,2.2903 -0.596308,2.08529 -0.904083,4.23122 -0.791683,5.52008 0.06762,0.77543 -0.0078,1.36132 -0.272335,2.1177 -0.201156,0.57524 -0.420835,1.36573 -0.487825,1.75648 -0.152081,0.88701 -0.704972,1.22383 -2.017448,1.22783 -0.729128,0.002 -0.973584,-0.0717 -0.973584,-0.29404 0,-0.16332 -0.214399,-0.46213 -0.476457,-0.66404 -0.262059,-0.20191 -0.851374,-0.71184 -1.309481,-1.13326 -0.458101,-0.42142 -0.91167,-0.76636 -1.00769,-0.76636 -0.09601,0 -0.445437,-0.3119 -0.776697,-0.69298 -0.331259,-0.38108 -1.061159,-0.94987 -1.622123,-1.26401 -0.560971,-0.31415 -1.2192,-0.73773 -1.462443,-0.94154 -0.243243,-0.2038 -0.564673,-0.37052 -0.714685,-0.37052 -0.150013,0 -0.520694,-0.23014 -0.823722,-0.51108 -0.303035,-0.28095 -0.657169,-0.51057 -0.787033,-0.51057 -0.129856,0 -0.602157,-0.29196 -1.049548,-0.64905 -0.757846,-0.60487 -1.391942,-0.85004 -2.913517,-1.12603 -0.801389,-0.14535 -1.2327343,0.29256 -1.6226403,1.64589 -0.166176,0.57677 -0.419669,1.3377 -0.563273,1.69085 -0.378974,0.93197 -0.164038,3.12278 0.350883,3.5755 l 0.381889,0.33589 -0.517798,1.27176 c -0.398603,0.97868 -0.492177,1.45187 -0.405144,2.05155 0.09254,0.63761 0.05243,0.80057 -0.220658,0.89607 -0.295227,0.10324 -0.32967,0.35299 -0.30024,2.16215 0.0183,1.12498 -0.04042,2.09535 -0.130225,2.15645 -0.0898,0.0611 -0.163297,0.42773 -0.163297,0.81442 0,0.54641 -0.07595,0.70332 -0.341065,0.70332 -0.187611,0 -0.437672,0.23415 -0.556038,0.52038 -0.29603,0.71586 -0.270996,0.90951 0.118339,0.90951 0.183591,0 0.414617,0.0888 0.513147,0.1974 0.196042,0.216 1.932854,-0.60356 2.243791,-1.05885 0.4876513,-0.71405 1.2201623,-3.80133 1.2485023,-5.26221 0.01641,-0.84603 0.105835,-1.67286 0.198955,-1.83761 0.09312,-0.16476 0.216738,-0.62262 0.274918,-1.017 0.08373,-0.56757 0.260203,-0.81303 0.845427,-1.17822 l 0.739489,-0.46147 -0.603064,-0.003 c -0.53573,-0.003 -0.602547,-0.0666 -0.602547,-0.57516 0,-0.31466 -0.08285,-0.66321 -0.183968,-0.77463 -0.178549,-0.19672 0.204906,-2.8313 0.451652,-3.10317 0.0589,-0.0649 0.276289,0.0824 0.483175,0.32711 0.206886,0.24467 0.477477,0.44656 0.600997,0.44856 0.12352,0.002 0.591943,0.27779 1.040763,0.61288 0.448826,0.33509 0.958467,0.60926 1.132747,0.60926 0.174288,0 0.683366,0.32091 1.131198,0.71314 0.447824,0.39223 0.933674,0.7142 1.07952,0.7152 0.145846,10e-4 0.776269,0.58788 1.400948,1.3038 0.624686,0.71592 1.339635,1.37114 1.589051,1.45624 1.420963,0.48469 2.605633,1.73298 2.295467,2.41845 -0.05929,0.13104 0.01183,0.0773 0.15813,-0.11937 0.330921,-0.44482 0.574771,-0.44952 1.16737,-0.0217 0.38917,0.28096 0.581732,0.29786 1.174089,0.10232 0.389684,-0.12864 0.8986,-0.2341 1.131197,-0.2341 0.531983,0 2.330601,-1.29966 2.62878,-1.89962 0.744563,-1.49813 1.399123,-4.22402 1.528589,-6.36447 0.09469,-1.56556 0.242233,-2.46728 0.491443,-3.0055 0.222353,-0.48024 0.35605,-1.18764 0.35605,-1.88413 0,-1.84336 0.282904,-2.16401 1.150318,-1.30224 0.254505,0.25285 1.021691,0.9658 1.704805,1.58388 1.66529,1.50675 4.715245,4.9376 5.365047,6.03529 0.373902,0.63161 0.693662,0.92594 1.113111,1.02474 0.774641,0.18238 1.033208,0.4317 0.923974,0.89194 -0.108189,0.45583 0.730816,0.99735 1.982308,1.27899 1.145821,0.25786 1.197275,0.25497 2.874243,-0.13952 1.356115,-0.31907 1.567267,-0.43875 2.457215,-1.3932 0.535466,-0.57429 0.973584,-1.14796 0.973584,-1.27486 0,-0.12689 0.173207,-0.40325 0.384989,-0.61443 0.211781,-0.21117 0.677615,-0.96021 1.035079,-1.6645 1.11071,-2.18835 1.639163,-2.40499 4.328418,-1.77508 1.359378,0.31835 4.26716,0.67392 6.305558,0.77152 l 1.019576,0.0491 0.02222,1.79059 c 0.01268,1.02618 0.111849,1.88864 0.232027,2.02106 0.115329,0.12707 0.20929,0.40141 0.20929,0.60927 0,0.63766 0.535509,1.56095 1.087272,1.87533 1.501434,0.85547 3.039629,0.55517 5.85494,-1.14205 1.290548,-0.77801 1.552798,-1.03703 2.138368,-2.11253 0.72945,-1.33978 1.01375,-2.05457 1.76889,-4.44417 l 0.50074,-1.58337 h 0.8785 c 0.81008,0 0.96399,0.0883 1.97456,1.1312 1.20086,1.23928 2.56476,2.33869 2.91352,2.34869 0.12238,0.004 0.55633,0.23267 0.96427,0.50953 0.40798,0.27687 0.95063,0.5044 1.20562,0.5054 0.82928,0.004 3.21427,-1.07101 4.56251,-2.05621 0.72446,-0.52938 1.60069,-1.02804 1.94717,-1.10794 0.34648,-0.0799 0.76356,-0.33182 0.92707,-0.56017 0.29158,-0.40727 0.32888,-0.40946 1.94717,-0.0868 0.90744,0.18085 2.80221,0.41595 4.21061,0.52245 1.40832,0.1065 2.66021,0.28175 2.78174,0.38912 0.22708,0.20062 1.073357,0.39013 2.538857,0.56844 0.45898,0.0558 1.35786,0.3911 1.99729,0.74518 l 1.16272,0.64389 0.28526,-0.44855 c 0.50995,-0.80219 0.64886,-0.54332 0.66456,1.23765 0.0103,1.16722 -0.20213,2.2254 -0.52969,2.63808 -0.14813,0.18662 -0.33119,0.82986 -0.40669,1.42989 -0.0755,0.59996 -0.23206,1.27489 -0.34778,1.49965 -0.19918,0.3868 -0.5182,2.26572 -0.4439,2.61482 0.019,0.0895 -0.10125,0.73323 -0.26769,1.43041 -0.40773,1.70786 -0.81597,3.84472 -0.81597,4.27209 0,0.19172 -0.21151,0.69197 -0.47025,1.11207 -0.32685,0.53062 -0.43826,0.92477 -0.36536,1.29036 0.0627,0.31478 -0.007,0.68864 -0.17311,0.9307 -0.15269,0.22257 -0.28019,0.75328 -0.28319,1.17925 -0.003,0.42782 -0.16631,1.02228 -0.3638,1.32809 -0.19664,0.30449 -0.45463,1.09287 -0.57361,1.75183 -0.11899,0.65897 -0.42475,1.80808 -0.67954,2.55385 -0.25479,0.74577 -0.539087,1.76131 -0.631487,2.25619 -0.0924,0.49487 -0.36358,1.184248 -0.60255,1.532208 -0.23897,0.34797 -0.49107,0.88572 -0.56017,1.19476 -0.0804,0.35965 -0.24838,0.56172 -0.46715,0.56172 -0.28279,0 -0.32889,-0.12784 -0.26769,-0.74001 0.0564,-0.56444 0.0135,-0.71452 -0.18035,-0.63252 -0.24599,0.10401 -0.29848,-0.50462 -0.10852,-1.258318 0.0389,-0.15452 -0.0237,-0.31938 -0.13901,-0.36638 -0.25655,-0.10465 -0.49519,0.845648 -0.34416,1.369938 0.0604,0.20968 0.0167,0.76059 -0.0966,1.22421 -0.14553,0.59415 -0.14712,0.91957 -0.01,1.10329 0.13793,0.18373 0.13383,0.45204 -0.009,0.90848 -0.14763,0.46572 -0.14654,0.7226 -0.004,0.91467 0.13841,0.18378 0.14445,0.48482 0.0191,0.96583 -0.1001,0.38441 -0.12937,1.1349 -0.0651,1.66812 0.0773,0.64211 0.0395,1.07255 -0.11214,1.27382 -0.18616,0.24714 -0.13853,0.47387 0.25528,1.2144 0.3877,0.72891 0.60455,0.9268 1.08624,0.9927 h 5.2e-4 c 1.19807,0.16392 1.55612,0.14342 1.86449,-0.10749 0.323877,-0.26353 0.899317,-1.7658 1.334797,-3.48505 0.28267,-1.11597 0.56606,-1.572 0.9772,-1.572 0.24098,0 0.23412,-0.0604 -0.0424,-0.39688 -0.30269,-0.36863 -0.30402,-0.4429 -0.0279,-1.05265 0.16342,-0.36087 0.29714,-0.95971 0.29714,-1.33066 0,-0.37095 0.21101,-1.29926 0.46922,-2.06293 0.47071,-1.392158 1.08553,-4.545468 0.92139,-4.726318 -0.0481,-0.053 0.0703,-0.38117 0.26303,-0.72916 0.43745,-0.78978 1.41911,-3.81521 1.89601,-5.84305 0.19822,-0.84283 0.43185,-1.83313 0.51935,-2.2009 0.0875,-0.36777 0.29522,-0.89763 0.46147,-1.17719 0.21837,-0.36715 0.25165,-0.61193 0.12041,-0.88212 -0.12663,-0.26071 -0.0936,-0.67806 0.10852,-1.37717 0.15952,-0.55168 0.28288,-1.18704 0.27388,-1.4118 -0.009,-0.22476 0.1481,-0.93778 0.34934,-1.5844 0.20124,-0.64662 0.36587,-1.38429 0.36587,-1.63918 0,-0.43729 1.10612,-4.10787 1.70687,-5.66477 0.43855,-1.13649 0.67325,-1.25756 2.02468,-1.04748 0.70882,0.11009 2.22376,0.10939 3.7791,-0.006 1.42792,-0.10441 3.53006,-0.25678 4.67103,-0.33848 1.14096,-0.0816 2.1299,-0.20932 2.1978,-0.28422 0.068,-0.0749 0.31325,-0.0569 0.54519,0.0403 0.80746,0.33827 3.73458,0.21398 7.05073,-0.29972 1.83591,-0.2844 3.92497,-0.5453 4.64209,-0.5793 0.71712,-0.034 1.38507,-0.1172 1.48467,-0.185 0.0996,-0.0678 0.51419,-0.18915 0.92139,-0.26975 0.40721,-0.0806 0.86555,-0.24997 1.01854,-0.3762 0.66013,-0.54466 1.14638,-0.73872 1.56218,-0.62374 0.46371,0.12823 1.99535,-0.49803 2.22674,-0.91054 0.0702,-0.12511 0.26884,-0.22951 0.44131,-0.23151 0.46559,-0.006 3.3819,-1.3666 3.62614,-1.6924 0.11601,-0.15476 0.59836,-0.438 1.07228,-0.62942 0.61828,-0.24971 0.91402,-0.5044 1.04645,-0.90124 0.80666,-2.41716 0.80158,-2.38594 0.50281,-3.0458 -0.27686,-0.61148 -0.21772,-1.28726 0.11266,-1.28726 0.0911,0 0.16536,0.13261 0.16536,0.29455 0,0.36292 0.30559,0.59106 0.55966,0.41806 0.11593,-0.0789 0.037,-0.36373 -0.20516,-0.73845 -0.35938,-0.55608 -0.42233,-0.58242 -0.709,-0.29663 -0.17302,0.17252 -0.43009,0.63727 -0.57102,1.03302 -0.14093,0.39575 -0.32907,0.71985 -0.41807,0.71985 -0.089,0 -0.11014,-0.0923 -0.047,-0.20464 0.24503,-0.43683 -0.12694,-0.16747 -0.87902,0.63665 -0.86125,0.9209 -1.49963,1.27347 -1.99367,1.10071 -0.17611,-0.0616 -0.42123,0.0222 -0.54467,0.18604 -0.12344,0.16389 -0.48999,0.3623 -0.81442,0.4408 -0.32444,0.0785 -1.00725,0.34978 -1.51722,0.60306 -1.42343,0.70697 -5.52542,2.03433 -7.31429,2.36678 -1.27357,0.23669 -4.74356,0.52464 -8.54108,0.70849 -1.58092,0.0765 -3.24984,0.19968 -3.70881,0.27388 -0.45898,0.0742 -1.2522,0.0632 -1.76217,-0.0243 -0.52008,-0.0892 -1.36958,-0.0697 -1.93477,0.0439 -0.55421,0.11145 -1.78078,0.20257 -2.72593,0.20257 -1.43593,0 -1.74812,-0.0582 -1.89807,-0.35347 -0.16971,-0.33456 -0.19892,-0.3356 -0.54106,0.007 -0.40276,0.40161 -2.82101,0.69351 -2.82101,0.34055 0,-0.10955 0.14674,-0.19896 0.32608,-0.19896 0.25311,0 0.42319,-0.40018 0.76119,-1.788 0.23947,-0.98331 0.50234,-2.20542 0.58394,-2.7156 0.1634,-1.02135 1.08494,-3.81689 1.77871,-5.39553 0.24429,-0.55587 0.44441,-1.21115 0.44441,-1.45624 0,-0.58735 0.46305,-1.7905 0.81184,-2.10944 0.15233,-0.1393 0.33044,-0.52198 0.39584,-0.85007 0.0654,-0.32808 0.19667,-0.64927 0.29197,-0.71417 0.0953,-0.0649 0.42577,-0.71314 0.73433,-1.44022 0.30855,-0.72715 0.72475,-1.50277 0.925,-1.72341 0.20026,-0.22064 0.36432,-0.54286 0.36432,-0.71624 0,-0.17338 0.36421,-0.74794 0.80926,-1.27692 0.44504,-0.52898 0.904,-1.28357 1.02009,-1.6769 0.11608,-0.39332 0.58659,-1.1714 1.04541,-1.72858 0.45882,-0.55718 0.83406,-1.08225 0.83406,-1.16685 0,-0.0846 0.38218,-0.67104 0.84956,-1.30328 0.46739,-0.63224 1.13299,-1.68171 1.47898,-2.33216 0.346,-0.65045 0.90256,-1.5552 1.23662,-2.01073 0.33406,-0.45554 0.89927,-1.30104 1.25625,-1.87896 1.09945,-1.77982 1.69823,-2.50865 3.49126,-4.24935 2.52804,-2.4542698 3.69679,-3.3311298 5.93194,-4.4498598 0.33804,-0.16919 0.95585,-0.57999 1.37252,-0.9126 0.41673,-0.33261 0.84421,-0.60462 0.94982,-0.60462 0.25379,0 1.05058,-0.83119 1.05058,-1.09605 0,-0.11427 -0.11342,-0.0378 -0.25166,0.17053 -0.17452,0.26294 -0.3586,0.33147 -0.60255,0.22427 -0.8869,-0.38991 -1.79402,-0.61027 -2.38177,-0.60099 z M 1.8424087,52.238728 c -0.15322,-0.0246 -0.268174,-0.0251 -0.30179,0.0119 -0.187191,0.20625 0.119663,0.45269 0.56379,0.45269 0.252168,0 0.50748,0.13998 0.56689,0.31057 0.151887,0.43611 -0.279479,1.48524 -0.896069,2.18023 -0.62136,0.70036 -0.633823,0.85854 -0.150895,1.90221 0.203989,0.44084 0.371037,0.95481 0.371037,1.14205 0,0.18723 0.125027,0.4549 0.278019,0.5948 0.152992,0.1399 0.278019,0.47282 0.278019,0.74 0,0.26719 0.06993,0.48628 0.155546,0.48628 0.223687,0 0.586528,0.95349 0.586528,1.54202 0,0.27565 0.06251,0.49965 0.139009,0.49765 0.0765,-0.002 0.509133,-0.42582 0.961699,-0.94206 0.799659,-0.91216 0.82714,-0.92544 0.979268,-0.47233 0.17611,0.52454 -0.06665,0.79651 -0.715719,0.80151 -0.62897,0.005 -0.772216,1.0056 -0.219624,1.53272 0.307665,0.29348 0.437725,0.64638 0.452685,1.22886 0.01154,0.44952 0.08563,1.34595 0.164848,1.99213 0.07922,0.64618 0.221313,1.17512 0.315743,1.17512 0.301157,0 0.888834,-0.41551 0.888834,-0.62838 0,-0.33126 0.791625,-1.4149 1.033528,-1.4149 0.332678,0 0.444228,-0.74826 0.1726,-1.15756 -0.209868,-0.31624 -0.277017,-0.32392 -0.56069,-0.0646 -0.297979,0.27249 -0.312825,0.24481 -0.191203,-0.36535 0.08486,-0.42573 0.06091,-0.66043 -0.06821,-0.66043 -0.291551,0 -0.483095,0.0876 -0.448035,0.20464 0.01683,0.0562 -0.212735,0.12109 -0.510045,0.14469 -0.619618,0.0491 -0.66446,-0.064 -0.233578,-0.58859 0.351256,-0.42765 1.458878,-0.50779 1.62574,-0.11782 0.06011,0.14047 0.06094,-0.0205 0.001,-0.3576 -0.05973,-0.33714 -0.227558,-0.68692 -0.373104,-0.77722 -0.200785,-0.12455 -0.217681,-0.26085 -0.06976,-0.56534 0.218452,-0.44974 -0.05321,-1.02509 -0.731737,-1.54874 -0.213337,-0.16464 -0.38809,-0.51159 -0.38809,-0.77101 0,-0.25942 -0.167048,-0.70543 -0.371037,-0.99116 -0.20399,-0.28573 -0.371037,-0.64451 -0.371037,-0.79736 0,-0.15285 -0.208557,-0.61595 -0.463537,-1.0294 -0.254987,-0.41345 -0.463538,-0.99796 -0.463538,-1.29863 0,-0.46276 -0.04255,-0.50729 -0.278019,-0.29197 -0.234958,0.21485 -0.278019,0.17266 -0.278019,-0.26975 0,-0.28807 0.08301,-0.58069 0.185001,-0.65009 0.280275,-0.19085 0.22241,-0.51056 -0.0925,-0.51056 -0.152986,0 -0.278019,-0.0731 -0.278019,-0.16227 0,-0.14297 -0.805877,-0.43325 -1.265556,-0.50694 z M 113.26817,92.411986 c -0.0161,3.6e-4 -0.0351,6.9e-4 -0.0512,0.001 0.0177,10e-4 0.0355,0.002 0.0532,0.003 -3.9e-4,-0.001 -10e-4,-0.003 -0.002,-0.004 z"
                  fill="white"
                />
              </mask>
              {/* Stroke Shape */}
              <path
                id="stroke"
                style={{
                  strokeWidth: "6",
                  strokeDasharray: "600",
                  strokeDashoffset: "0",
                  animation: "brushStroke 3s linear 1",
                }}
                mask="url(#mask)"
                d="m 3.1783062,55.605028 c 2.1134314,2.813098 2.7973827,11.56212 6.6145146,9.927131 0.7714562,-4.193606 0.1926839,-17.303039 7.0372042,-11.514891 3.63507,4.598584 13.439378,9.544293 14.108726,0.09064 -0.756483,-5.116758 4.282243,-11.417063 7.743193,-4.635414 1.610158,5.072268 8.355455,10.497146 11.273971,3.372197 4.239837,-6.101244 11.11456,-1.227414 16.313848,-3.270981 3.295426,-1.719906 2.339833,-2.840433 0.127231,-0.02231 -5.636749,4.904719 2.583036,11.634199 6.000657,5.058754 1.096571,-3.769366 4.592418,-10.551153 8.493823,-4.872756 6.477052,4.484218 13.049339,-5.769884 20.048296,-1.273648 8.59002,2.653861 17.63013,1.76627 26.48098,1.933704 5.47842,-0.06238 10.7794,-1.543952 16.11026,-2.338677 7.50565,-2.266615 6.42981,-10.544301 5.69766,-16.605046 -0.638,-7.387713 -0.26282,-14.817596 0.46339,-22.1580755 -1.35261,-8.78162343 -11.11314,-6.4293006 -15.58445,-1.6548948 -8.74027,6.6466353 -16.73965,15.3337153 -19.14863,26.3548413 -3.78774,8.367457 -6.19143,17.209893 -7.7595,26.235334 -1.79381,8.108297 -3.86129,16.207534 -5.97807,24.19775 -2.459325,3.400414 -5.968901,-2.037581 -5.888366,-4.408632"
              />
            </svg>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
